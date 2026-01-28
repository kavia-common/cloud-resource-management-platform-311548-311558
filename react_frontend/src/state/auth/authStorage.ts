const TOKEN_STORAGE_KEY = 'crm_auth_token';

// PUBLIC_INTERFACE
export function getAuthToken(): string | null {
  /** Get the current auth token from localStorage. */
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

// PUBLIC_INTERFACE
export function setAuthToken(token: string): void {
  /** Persist auth token to localStorage. */
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

// PUBLIC_INTERFACE
export function clearAuthToken(): void {
  /** Remove auth token from localStorage. */
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}
