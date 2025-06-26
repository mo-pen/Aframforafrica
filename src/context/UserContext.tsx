import React, { createContext, useContext, useState, useEffect } from 'react';

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
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('afram-user');
    return savedUser ? JSON.parse(savedUser) : {
      id: '1',
      name: 'Student',
      email: 'student@example.com',
      aframTokens: 0,
      level: 1,
      completedQuizzes: [],
      achievements: []
    };
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('afram-user', JSON.stringify(user));
    }
  }, [user]);

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const addAframTokens = (amount: number) => {
    setUser(prev => prev ? { ...prev, aframTokens: prev.aframTokens + amount } : null);
  };

  const completeQuiz = (quizId: string, score: number) => {
    if (!user) return;
    
    const tokensEarned = score * 0.2;
    const newLevel = Math.floor((user.aframTokens + tokensEarned) / 10) + 1;
    
    setUser(prev => prev ? {
      ...prev,
      aframTokens: prev.aframTokens + tokensEarned,
      level: newLevel,
      completedQuizzes: [...prev.completedQuizzes, quizId]
    } : null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, addAframTokens, completeQuiz }}>
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