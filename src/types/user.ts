/**
 * Student Profile & Auth State Interfaces
 */

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  grade: string;
  schoolName?: string;
  joinedDate: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
}
