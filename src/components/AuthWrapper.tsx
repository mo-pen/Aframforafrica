import React, { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { BookOpen } from 'lucide-react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth session error:', error);
          setError('Authentication error. Please refresh the page.');
        }
        
        if (mounted) {
          setSession(session);
          setLoading(false);
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        if (mounted) {
          setError('Failed to initialize authentication');
          setLoading(false);
        }
      }
    };

    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setSession(session);
        setLoading(false);
        setError(null);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-amber-50 to-orange-100 flex items-center justify-center relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="text-center relative z-10">
          <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4 animate-pulse" />
          <p className="text-green-800 font-medium">Loading Afram EduTech...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 flex items-center justify-center p-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="text-center max-w-md relative z-10">
          <div className="text-red-600 mb-4">
            <BookOpen className="h-12 w-12 mx-auto mb-4" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Connection Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors shadow-lg"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-amber-50 to-orange-100 flex items-center justify-center p-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-amber-900/10 to-orange-900/20"></div>
        
        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <BookOpen className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-900">Afram EduTech</h1>
                <p className="text-sm text-green-700">by Shaqcor Edtech</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-green-900 mb-2">Welcome to African Education</h2>
            <p className="text-green-800">Sign in to start your learning journey</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-green-200">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#059669',
                      brandAccent: '#047857',
                    },
                  },
                },
                className: {
                  container: 'auth-container',
                  button: 'auth-button',
                  input: 'auth-input',
                },
              }}
              providers={[]}
              redirectTo={window.location.origin}
              onlyThirdPartyProviders={false}
              magicLink={false}
              showLinks={true}
              localization={{
                variables: {
                  sign_in: {
                    email_label: 'Email Address',
                    password_label: 'Password',
                    button_label: 'Sign In',
                    loading_button_label: 'Signing In...',
                    link_text: "Don't have an account? Sign up",
                  },
                  sign_up: {
                    email_label: 'Email Address',
                    password_label: 'Create Password',
                    button_label: 'Create Account',
                    loading_button_label: 'Creating Account...',
                    link_text: 'Already have an account? Sign in',
                  },
                },
              }}
            />
          </div>
          
          <div className="text-center mt-6 text-sm text-green-800 bg-white/80 backdrop-blur-sm rounded-xl p-4">
            <p className="font-medium">Join thousands of learners across Africa</p>
            <p className="mt-2 flex items-center justify-center">
              🌍 Headquarters: Accra, Ghana, Africa
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;