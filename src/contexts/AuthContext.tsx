import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

const ALLOWED_ADMIN_EMAILS = [
  'leewayneelshindegradeviii8@gmail.com',
  'neelisideal@gmail.com',
  'nv2008223@gmail.com',
];

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAdmin: false,
  loading: false,
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          setUser(user);
          setIsAdmin(!!user && ALLOWED_ADMIN_EMAILS.includes(user.email ?? ''));
          setLoading(false);
        },
        (error) => {
          // Graceful handling for demo mode when live Firebase project isn't configured
          console.warn('Auth state notice (demo mode):', error.message);
          setUser(null);
          setIsAdmin(false);
          setLoading(false);
        }
      );
      return unsubscribe;
    } catch (err) {
      console.warn('Auth initialization notice (demo mode):', err);
      setLoading(false);
    }
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.warn('Sign-in unavailable without Firebase credentials:', err);
      alert('Google Sign-In requires active Firebase credentials. This demo is running in offline/demo mode.');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch {
      setUser(null);
      setIsAdmin(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
