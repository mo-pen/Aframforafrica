import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import OfflineIndicator from './components/OfflineIndicator';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import FarmerHub from './pages/FarmerHub';
import Investment from './pages/Investment';
import Profile from './pages/Profile';
import History from './pages/History';
import Agriculture from './pages/Agriculture';
import Technology from './pages/Technology';
import AuthWrapper from './components/AuthWrapper';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // PWA Install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallBanner(false);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallApp = async () => {
    if (!installPrompt) return;

    const result = await installPrompt.prompt();
    console.log('Install prompt result:', result);
    setInstallPrompt(null);
    setShowInstallBanner(false);
  };

  const dismissInstallBanner = () => {
    setShowInstallBanner(false);
  };

  return (
    <div className="App">
      <AuthProvider>
        <AuthWrapper>
          <UserProvider>
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>

              {/* Install App Banner */}
              {showInstallBanner && (
                <div className="fixed top-0 left-0 right-0 bg-green-600 text-white p-3 z-50">
                  <div className="flex items-center justify-between max-w-4xl mx-auto">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        📱
                      </div>
                      <div>
                        <p className="font-medium">Install Afram EduTech</p>
                        <p className="text-sm opacity-90">Get the full mobile app experience</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleInstallApp}
                        className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                      >
                        Install
                      </button>
                      <button
                        onClick={dismissInstallBanner}
                        className="text-white/80 hover:text-white px-2"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Offline Indicator */}
              <OfflineIndicator />
              
              <Navigation />
              
              <main className={`pb-20 relative z-10 ${showInstallBanner ? 'pt-24' : 'pt-0'}`}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/quiz/:category?" element={<Quiz />} />
                  <Route path="/farmer-hub" element={<FarmerHub />} />
                  <Route path="/investment" element={<Investment />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/agriculture" element={<Agriculture />} />
                  <Route path="/technology" element={<Technology />} />
                </Routes>
              </main>
            </div>
          </UserProvider>
        </AuthWrapper>
      </AuthProvider>
    </div>
  );
}

export default App;