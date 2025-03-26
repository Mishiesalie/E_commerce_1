import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
  } | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email: string, password: string) => {
        // Here you would typically make an API call to your authentication service
        // For now, we'll just simulate a successful login
        set({
          isAuthenticated: true,
          user: {
            name: 'Demo User',
            email: email,
          },
        });
      },
      signup: async (name: string, email: string, password: string) => {
        // Here you would typically make an API call to your authentication service
        // For now, we'll just simulate a successful signup
        set({
          isAuthenticated: true,
          user: {
            name: name,
            email: email,
          },
        });
      },
      logout: () => {
        set({
          isAuthenticated: false,
          user: null,
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
); 