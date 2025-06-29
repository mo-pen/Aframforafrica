import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
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

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

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

              {!isOnline && (
                <div className="bg-red-500 text-white text-center py-2 text-sm relative z-50">
                  You're offline. Some features may be limited.
                </div>
              )}
              
              <Navigation />
              
              <main className="pb-20 relative z-10">
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