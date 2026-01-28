import { FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../state/auth/AuthContext';

// PUBLIC_INTERFACE
export function LoginPage() {
  /** Login page (stubbed local token auth). */
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as { state?: { from?: string } };

  const [email, setEmail] = useState('demo@local');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login({ email, password });
      navigate(location.state?.from ?? '/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-gray-50 px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <div className="crm-card">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-soft">
              CRM
            </div>
            <div>
              <div className="text-lg font-bold text-text">Sign in</div>
              <div className="text-sm text-secondary">Use stub auth (local token) for now</div>
            </div>
          </div>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="mb-1 block text-sm font-medium text-text">Email</label>
              <input
                className="crm-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-text">Password</label>
              <input
                className="crm-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
              />
            </div>

            {error ? (
              <div className="rounded-lg border border-error/30 bg-error/10 px-3 py-2 text-sm text-error">
                {error}
              </div>
            ) : null}

            <button className="crm-button w-full" type="submit" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </button>

            <div className="text-center text-sm text-secondary">
              No account?{' '}
              <Link to="/register" className="font-semibold text-primary hover:underline">
                Create one
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-4 text-center text-xs text-secondary">
          Configure backend URL via <span className="font-mono">VITE_API_BASE_URL</span>.
        </div>
      </div>
    </div>
  );
}
