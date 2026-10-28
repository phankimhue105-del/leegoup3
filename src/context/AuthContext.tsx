import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types/user';
import { LoginCredentials, AuthResult, AuthContextType } from '../types/auth';
import { authService } from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('ebu3_user_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Sync user profile (without password) to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('ebu3_user_profile', JSON.stringify(user));
    } else {
      localStorage.removeItem('ebu3_user_profile');
    }
  }, [user]);

  /**
   * Login method delegates to authService.
   * Does NOT auto-grant access or use mock credentials.
   */
  const login = async (credentials: LoginCredentials): Promise<AuthResult> => {
    setIsLoading(true);
    try {
      const result = await authService.login(credentials);
      if (result.success && result.user) {
        setUser(result.user);
      }
      return result;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clear session & profile
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem('ebu3_user_profile');
  };

  /**
   * Update student profile fields
   */
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
        isLoading,
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
