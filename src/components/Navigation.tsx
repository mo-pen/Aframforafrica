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
  Cpu
} from 'lucide-react';
import { useUser } from '../context/UserContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();

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

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Afram EduTech</h1>
              <p className="text-xs text-gray-500">by Shaqcor Edtech</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-blue-600">
                {user?.aframTokens.toFixed(1)} AFRAM
              </div>
              <div className="text-xs text-gray-500">Level {user?.level}</div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            </div>
            
            <div className="p-4 space-y-2">
              {[...navItems, ...moreItems].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center p-2 transition-colors ${
                location.pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
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