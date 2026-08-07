import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, AuthState } from '../types/user';
import { PLACEHOLDER_IMAGES } from '../data/placeholderMedia';

interface AuthContextType extends AuthState {
  login: (name: string, avatarUrl?: string) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'student-001',
  name: 'Bảo Nam', // Vietnamese student default name
  avatarUrl: PLACEHOLDER_IMAGES.avatarDefault,
  grade: 'Lớp 3 / Grade 3',
  schoolName: 'Trường Tiểu Học Nguyễn Du',
  joinedDate: '2026-08-01',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('ebu3_user_profile');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('ebu3_user_profile', JSON.stringify(user));
    } else {
      localStorage.removeItem('ebu3_user_profile');
    }
  }, [user]);

  const login = (name: string, avatarUrl?: string) => {
    const newUser: UserProfile = {
      id: `student-${Date.now()}`,
      name: name || 'Bảo Nam',
      avatarUrl: avatarUrl || PLACEHOLDER_IMAGES.avatarDefault,
      grade: 'Lớp 3 / Grade 3',
      joinedDate: new Date().toISOString().split('T')[0],
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
