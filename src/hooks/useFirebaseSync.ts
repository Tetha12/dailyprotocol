import { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '@/lib/firebase';
import { doc, setDoc, onSnapshot, Firestore } from 'firebase/firestore';

export function useFirebaseSync<T>(
  uid: string | null,
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  const [value, setValue] = useState<T>(initialValue);
  const [isReady, setIsReady] = useState(false);
  const syncTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstLoad = useRef(true);

  // Load initial data from Firebase
  useEffect(() => {
    if (!uid) {
      console.log('No uid, using initial value for:', key);
      setIsReady(true);
      return;
    }

    console.log('Setting up Firebase sync for:', key, 'user:', uid);
    const dataRef = doc(db as Firestore, 'friday_users', uid, 'data', key);
    
    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(
      dataRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data().value;
          console.log('Received data from Firebase for', key, ':', data);
          setValue(data);
        } else {
          // Initialize with default value if not exists
          console.log('No existing data, initializing for:', key);
          setDoc(dataRef, { value: initialValue }, { merge: true }).catch(err => {
            console.error('Error initializing data:', err);
          });
        }
        isFirstLoad.current = false;
        setIsReady(true);
      },
      (error) => {
        console.error('Firebase sync error for', key, ':', error);
        // Fallback to initial value on error
        isFirstLoad.current = false;
        setIsReady(true);
      }
    );

    return () => {
      console.log('Unsubscribing from:', key);
      unsubscribe();
    };
  }, [uid, key, initialValue]);

  // Save to Firebase with debounce
  const saveValue = useCallback((newValue: T) => {
    if (!uid || !isReady || isFirstLoad.current) {
      console.log('Skipping save - not ready:', { uid: !!uid, isReady, isFirstLoad: isFirstLoad.current });
      return;
    }
    
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }
    
    syncTimeoutRef.current = setTimeout(async () => {
      try {
        const dataRef = doc(db as Firestore, 'friday_users', uid, 'data', key);
        await setDoc(dataRef, { value: newValue }, { merge: true });
        console.log('Saved to Firebase:', key);
      } catch (error) {
        console.error('Failed to sync to Firebase:', key, error);
      }
    }, 800);
  }, [uid, key, isReady]);

  // Setter function
  const setStoredValue = useCallback((updater: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const newValue = typeof updater === 'function' 
        ? (updater as (prev: T) => T)(prev) 
        : updater;
      saveValue(newValue);
      return newValue;
    });
  }, [saveValue]);

  return [value, setStoredValue, isReady];
}
