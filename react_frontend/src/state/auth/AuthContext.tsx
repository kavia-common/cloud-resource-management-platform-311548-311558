import React, { createContext, useCallback, useMemo, useState } from 'react';
import { clearAuthToken, getAuthToken, setAuthToken } from './authStorage';

type AuthUser = {
  email: string;
};

type AuthContextValue = {
  token: string | null;
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (params: { email: string; password: string }) => Promise<void>;
  register: (params: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// PUBLIC_INTERFACE
export function AuthProvider({ children }: { children: React.ReactNode }) {
  /**
   * Auth provider.
   * Currently stubbed with a localStorage token. Later replace login/register
   * with real JWT calls while preserving this interface.
   */
  const [token, setToken] = useState<string | null>(() => getAuthToken());
  const [user, setUser] = useState<AuthUser | null>(() =>
    token ? { email: 'demo@local' } : null,
  );

  const login = useCallback(async (params: { email: string; password: string }) => {
    // Stub: in the future call backend and store JWT/refresh token.
    const fakeToken = `local_${btoa(`${params.email}:${Date.now()}`)}`;
    setAuthToken(fakeToken);
    setToken(fakeToken);
    setUser({ email: params.email });
  }, []);

  const register = useCallback(async (params: { email: string; password: string }) => {
    // Stub: in the future call backend and store JWT/refresh token.
    const fakeToken = `local_${btoa(`${params.email}:${Date.now()}`)}`;
    setAuthToken(fakeToken);
    setToken(fakeToken);
    setUser({ email: params.email });
  }, []);

  const logout = useCallback(() => {
    clearAuthToken();
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      user,
      login,
      register,
      logout
    }),
    [token, user, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// PUBLIC_INTERFACE
export function useAuth(): AuthContextValue {
  /** Hook to access auth state/actions. */
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
