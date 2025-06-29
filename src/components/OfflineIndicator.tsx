import React from 'react';
import { Wifi, WifiOff, RefreshCw, CheckCircle } from 'lucide-react';
import { useOfflineSync } from '../hooks/useOfflineSync';

const OfflineIndicator: React.FC = () => {
  const { isOnline, isSyncing, lastSyncTime, syncData } = useOfflineSync();

  const formatLastSync = (date: Date | null) => {
    if (!date) return 'Never';
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className={`fixed top-16 right-4 z-50 transition-all duration-300 ${
      !isOnline ? 'translate-y-0' : 'translate-y-[-100px] opacity-0'
    }`}>
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px]">
        <div className="flex items-center space-x-2 mb-2">
          {isOnline ? (
            <Wifi className="h-4 w-4 text-green-500" />
          ) : (
            <WifiOff className="h-4 w-4 text-red-500" />
          )}
          <span className={`text-sm font-medium ${
            isOnline ? 'text-green-700' : 'text-red-700'
          }`}>
            {isOnline ? 'Online' : 'Offline Mode'}
          </span>
        </div>
        
        {!isOnline && (
          <p className="text-xs text-gray-600 mb-2">
            Your progress is saved locally and will sync when you're back online.
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Last sync: {formatLastSync(lastSyncTime)}</span>
          {isOnline && (
            <button
              onClick={syncData}
              disabled={isSyncing}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 disabled:opacity-50"
            >
              {isSyncing ? (
                <RefreshCw className="h-3 w-3 animate-spin" />
              ) : (
                <CheckCircle className="h-3 w-3" />
              )}
              <span>{isSyncing ? 'Syncing...' : 'Sync'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfflineIndicator;