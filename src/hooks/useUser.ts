import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useUser() {
  const [uid, setUid] = useLocalStorage<string | null>('friday_uid', null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (username: string): Promise<boolean> => {
    const clean = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
    if (clean.length < 3) return false;
    
    setIsLoading(true);
    setUid(clean);
    setIsLoading(false);
    return true;
  }, [setUid]);

  const logout = useCallback(() => {
    setUid(null);
  }, [setUid]);

  return { uid, login, logout, isLoading };
}
