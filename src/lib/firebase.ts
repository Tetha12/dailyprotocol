import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, enableNetwork, disableNetwork, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTQX07mRXuA73tvSpc_Rf3HNh5MpguENE",
  authDomain: "databasedailycheck.firebaseapp.com",
  projectId: "databasedailycheck",
  storageBucket: "databasedailycheck.firebasestorage.app",
  messagingSenderId: "1014838261484",
  appId: "1:1014838261484:web:afbfd9cfafe498f68757c9"
};

// Initialize Firebase
let app;
let db: Firestore;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

export { app, db };

// Helper to ensure user document exists
export async function ensureUserDoc(uid: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'friday_users', uid);
    await setDoc(userRef, { 
      username: uid, 
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    }, { merge: true });
    console.log('User doc created/updated for:', uid);
    return true;
  } catch (error) {
    console.error('Error creating user doc:', error);
    return false;
  }
}

// Network status helpers
export async function enableFirebaseNetwork(): Promise<void> {
  await enableNetwork(db);
}

export async function disableFirebaseNetwork(): Promise<void> {
  await disableNetwork(db);
}
