import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';
import { offlineStorage } from '../lib/offlineStorage';

interface User {
  id: string;
  name: string;
  email: string;
  aframTokens: number;
  level: number;
  completedQuizzes: string[];
  achievements: string[];
}

interface UserContextType {
  user: User | null;
  updateUser: (updates: Partial<User>) => void;
  addAframTokens: (amount: number) => void;
  completeQuiz: (quizId: string, score: number) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user: authUser } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      loadUserProfile();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [authUser]);

  const loadUserProfile = async () => {
    if (!authUser) return;

    try {
      // First try to load from offline storage
      const offlineProgress = await offlineStorage.getUserProgress();
      
      if (navigator.onLine) {
        // Try to get from Supabase if online
        const { data: profile, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', authUser.id)
          .single();

        if (error && error.code === 'PGRST116') {
          // User profile doesn't exist, create one
          const newProfile = {
            id: authUser.id,
            name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'Student',
            email: authUser.email || '',
            afram_tokens: offlineProgress?.aframTokens || 0,
            level: offlineProgress?.level || 1,
            completed_quizzes: offlineProgress?.completedQuizzes || [],
            achievements: offlineProgress?.achievements || []
          };

          const { data: createdProfile, error: createError } = await supabase
            .from('user_profiles')
            .insert([newProfile])
            .select()
            .single();

          if (!createError && createdProfile) {
            setUser({
              id: createdProfile.id,
              name: createdProfile.name,
              email: createdProfile.email,
              aframTokens: createdProfile.afram_tokens,
              level: createdProfile.level,
              completedQuizzes: createdProfile.completed_quizzes || [],
              achievements: createdProfile.achievements || []
            });
          } else {
            // Fallback to offline data or default
            setUser({
              id: authUser.id,
              name: newProfile.name,
              email: newProfile.email,
              aframTokens: newProfile.afram_tokens,
              level: newProfile.level,
              completedQuizzes: newProfile.completed_quizzes,
              achievements: newProfile.achievements
            });
          }
        } else if (profile) {
          const userData = {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            aframTokens: profile.afram_tokens,
            level: profile.level,
            completedQuizzes: profile.completed_quizzes || [],
            achievements: profile.achievements || []
          };
          setUser(userData);
          
          // Save to offline storage
          await offlineStorage.saveUserProgress(userData);
        }
      } else if (offlineProgress) {
        // Use offline data when offline
        setUser({
          id: authUser.id,
          name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'Student',
          email: authUser.email || '',
          aframTokens: offlineProgress.aframTokens,
          level: offlineProgress.level,
          completedQuizzes: offlineProgress.completedQuizzes,
          achievements: offlineProgress.achievements
        });
      } else {
        // Fallback to basic user data
        setUser({
          id: authUser.id,
          name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'Student',
          email: authUser.email || '',
          aframTokens: 0,
          level: 1,
          completedQuizzes: [],
          achievements: []
        });
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
      // Fallback to basic user data
      setUser({
        id: authUser.id,
        name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'Student',
        email: authUser.email || '',
        aframTokens: 0,
        level: 1,
        completedQuizzes: [],
        achievements: []
      });
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (updates: Partial<User>) => {
    if (!user || !authUser) return;

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);

    // Always save to offline storage
    await offlineStorage.saveUserProgress(updatedUser);

    // Try to sync with Supabase if online
    if (navigator.onLine) {
      try {
        await supabase
          .from('user_profiles')
          .update({
            name: updatedUser.name,
            email: updatedUser.email,
            afram_tokens: updatedUser.aframTokens,
            level: updatedUser.level,
            completed_quizzes: updatedUser.completedQuizzes,
            achievements: updatedUser.achievements
          })
          .eq('id', user.id);
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
    }
  };

  const addAframTokens = async (amount: number) => {
    if (!user) return;
    
    const newTokens = user.aframTokens + amount;
    const newLevel = Math.floor(newTokens / 10) + 1;
    
    await updateUser({ 
      aframTokens: newTokens, 
      level: newLevel 
    });
  };

  const completeQuiz = async (quizId: string, score: number) => {
    if (!user) return;
    
    const tokensEarned = score * 0.2;
    const newTokens = user.aframTokens + tokensEarned;
    const newLevel = Math.floor(newTokens / 10) + 1;
    const newCompletedQuizzes = [...user.completedQuizzes, quizId];
    
    // Save quiz result to offline storage
    await offlineStorage.saveQuizResult({
      category: quizId.split('-')[0],
      title: quizId,
      score,
      totalQuestions: 10, // Default, should be passed as parameter
      tokensEarned
    });
    
    await updateUser({
      aframTokens: newTokens,
      level: newLevel,
      completedQuizzes: newCompletedQuizzes
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, addAframTokens, completeQuiz, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};