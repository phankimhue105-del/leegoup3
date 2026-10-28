import { UserProfile, AuthState } from './user';

/**
 * Authentication Credentials Interface
 */
export interface LoginCredentials {
  username: string;
  password: string;
}

/**
 * Authentication Response Result
 */
export interface AuthResult {
  success: boolean;
  user?: UserProfile;
  message: string;
  isPendingSetup?: boolean;
}

/**
 * Auth Context State & Actions
 */
export interface AuthContextType extends AuthState {
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}
