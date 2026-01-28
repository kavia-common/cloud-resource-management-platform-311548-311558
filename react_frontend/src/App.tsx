import { AppRoutes } from './router/AppRoutes';
import { AuthProvider } from './state/auth/AuthContext';

// PUBLIC_INTERFACE
export default function App() {
  /** Root providers wrapper. */
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
