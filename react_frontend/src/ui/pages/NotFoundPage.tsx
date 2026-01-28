import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export function NotFoundPage() {
  /** 404 page. */
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-gray-50 px-4 py-10">
      <div className="mx-auto w-full max-w-xl">
        <div className="crm-card">
          <div className="text-2xl font-bold text-text">Page not found</div>
          <p className="mt-2 text-sm text-secondary">The page you requested doesn’t exist.</p>
          <div className="mt-6">
            <Link className="crm-button" to="/">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
