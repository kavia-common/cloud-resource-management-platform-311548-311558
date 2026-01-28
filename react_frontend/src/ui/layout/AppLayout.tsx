import { useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { navItems } from '../nav/navItems';

// PUBLIC_INTERFACE
export function AppLayout() {
  /** Main authenticated app shell layout. */
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const currentTitle = useMemo(() => {
    const match = navItems.find((i) => i.to !== '/' && location.pathname.startsWith(i.to));
    if (location.pathname === '/') return 'Dashboard';
    return match?.label ?? 'Cloud Resource Manager';
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-gray-50">
      <div className="flex min-h-screen">
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar title={currentTitle} onOpenMobileNav={() => setMobileOpen(true)} />

          <main className="min-w-0 flex-1 px-4 py-6 md:px-8">
            <div className="mx-auto w-full max-w-7xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
