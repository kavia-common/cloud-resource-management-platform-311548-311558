import { NavLink } from 'react-router-dom';
import { navItems } from '../nav/navItems';

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-soft">
          CRM
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-text">Cloud Resource Manager</div>
          <div className="truncate text-xs text-secondary">Royal Purple</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'bg-primary/10 text-primary' : 'text-text hover:bg-gray-100'
                ].join(' ')
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="border-t border-gray-200 px-4 py-3">
        <div className="text-xs text-secondary">
          API base:{' '}
          <span className="font-mono text-[11px] text-text">{import.meta.env.VITE_API_BASE_URL ?? '(unset)'}</span>
        </div>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
export function Sidebar({
  mobileOpen,
  onClose
}: {
  mobileOpen: boolean;
  onClose: () => void;
}) {
  /** Responsive sidebar (modal on mobile, fixed on desktop). */
  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-surface/90 backdrop-blur md:block">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={onClose} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] border-r border-gray-200 bg-surface shadow-soft">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <div className="text-sm font-semibold text-text">Navigation</div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-2 py-1 text-sm font-semibold text-text hover:bg-gray-100"
                aria-label="Close navigation"
              >
                Close
              </button>
            </div>
            <SidebarContent onNavigate={onClose} />
          </div>
        </div>
      ) : null}
    </>
  );
}
