import { useState, useEffect } from 'react';
import { offlineStorage } from '../lib/offlineStorage';

export const useOfflineSync = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Auto-sync when coming back online
      syncData();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initialize offline storage
    offlineStorage.init();

    // Sync on app start if online
    if (navigator.onLine) {
      syncData();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const syncData = async () => {
    if (!navigator.onLine || isSyncing) return;

    setIsSyncing(true);
    try {
      const success = await offlineStorage.syncWithServer();
      if (success) {
        setLastSyncTime(new Date());
      }
    } catch (error) {
      console.error('Sync error:', error);
    } finally {
      setIsSyncing(false);
    }
  };

  const forcSync = () => {
    if (navigator.onLine) {
      syncData();
    }
  };

  return {
    isOnline,
    isSyncing,
    lastSyncTime,
    syncData: forcSync,
  };
};