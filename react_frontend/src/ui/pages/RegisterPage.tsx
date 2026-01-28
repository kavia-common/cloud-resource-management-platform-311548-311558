import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../state/auth/AuthContext';

// PUBLIC_INTERFACE
export function RegisterPage() {
  /** Register page (stubbed local token auth). */
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('new@local');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register({ email, password });
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-gray-50 px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <div className="crm-card">
          <div className="text-lg font-bold text-text">Create account</div>
          <div className="text-sm text-secondary">Stubbed flow (will be replaced by JWT backend)</div>

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
                autoComplete="new-password"
                required
              />
            </div>

            {error ? (
              <div className="rounded-lg border border-error/30 bg-error/10 px-3 py-2 text-sm text-error">
                {error}
              </div>
            ) : null}

            <button className="crm-button w-full" type="submit" disabled={loading}>
              {loading ? 'Creating…' : 'Create account'}
            </button>

            <div className="text-center text-sm text-secondary">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
