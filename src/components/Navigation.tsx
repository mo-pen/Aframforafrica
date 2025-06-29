import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Brain, 
  Sprout, 
  DollarSign, 
  User,
  Menu,
  X,
  History,
  Cpu,
  LogOut
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();
  const { signOut } = useAuth();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/courses', icon: BookOpen, label: 'Courses' },
    { path: '/quiz', icon: Brain, label: 'Quiz' },
    { path: '/farmer-hub', icon: Sprout, label: 'Farmers' },
    { path: '/investment', icon: DollarSign, label: 'Invest' },
  ];

  const moreItems = [
    { path: '/history', icon: History, label: 'History' },
    { path: '/agriculture', icon: Sprout, label: 'Agriculture' },
    { path: '/technology', icon: Cpu, label: 'Technology' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-green-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-green-900">Afram EduTech</h1>
              <p className="text-xs text-green-700">by Shaqcor Edtech</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {user?.aframTokens?.toFixed(1) || '0.0'} AFRAM
              </div>
              <div className="text-xs text-amber-600 font-medium">Level {user?.level || 1}</div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors shadow-sm"
            >
              {isMenuOpen ? <X className="h-5 w-5 text-green-700" /> : <Menu className="h-5 w-5 text-green-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-green-50 to-amber-50 shadow-xl transform transition-transform">
            <div className="p-6 border-b border-green-200 bg-white/80 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-green-900">Menu</h2>
              {user && (
                <p className="text-sm text-green-700 mt-1">Welcome, {user.name}</p>
              )}
            </div>
            
            <div className="p-4 space-y-2">
              {[...navItems, ...moreItems].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-green-200 text-green-800 shadow-sm'
                      : 'text-green-700 hover:bg-green-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              <button
                onClick={handleSignOut}
                className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-green-200 z-40 shadow-lg">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 transition-colors ${
                location.pathname === item.path
                  ? 'text-green-600'
                  : 'text-green-500 hover:text-green-700'
              }`}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;