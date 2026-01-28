import { useMemo, useState } from 'react';
import { useAuth } from '../../state/auth/AuthContext';

type Org = { id: string; name: string };

const ORGS: Org[] = [
  { id: 'org_1', name: 'Acme Corp' },
  { id: 'org_2', name: 'Umbrella Group' },
  { id: 'org_3', name: 'Globex' }
];

const ORG_STORAGE_KEY = 'crm_selected_org';

// PUBLIC_INTERFACE
export function Topbar({
  title,
  onOpenMobileNav
}: {
  title: string;
  onOpenMobileNav: () => void;
}) {
  /** Top bar: context title, org switcher, user menu. */
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedOrgId = useMemo(() => localStorage.getItem(ORG_STORAGE_KEY) ?? ORGS[0].id, []);
  const [orgId, setOrgId] = useState(selectedOrgId);

  const onChangeOrg = (next: string) => {
    setOrgId(next);
    localStorage.setItem(ORG_STORAGE_KEY, next);
  };

  const initials = (user?.email?.[0] ?? 'U').toUpperCase();

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-3 px-4 md:px-8">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-text shadow-soft hover:bg-gray-50 md:hidden"
          onClick={onOpenMobileNav}
        >
          Menu
        </button>

        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-text">{title}</div>
          <div className="truncate text-xs text-secondary">Manage resources, costs, and optimization</div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <label className="text-xs font-medium text-secondary" htmlFor="org-switcher">
            Org
          </label>
          <select
            id="org-switcher"
            className="h-9 rounded-lg border border-gray-200 bg-white px-3 text-sm text-text shadow-soft focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={orgId}
            onChange={(e) => onChangeOrg(e.target.value)}
          >
            {ORGS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-soft"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {initials}
          </button>

          {menuOpen ? (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-soft"
            >
              <div className="px-2 py-2">
                <div className="text-sm font-semibold text-text">Signed in</div>
                <div className="truncate text-xs text-secondary">{user?.email ?? 'unknown'}</div>
              </div>
              <div className="my-1 h-px bg-gray-100" />
              <button
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-text hover:bg-gray-50"
                onClick={() => {
                  setMenuOpen(false);
                  logout();
                }}
                role="menuitem"
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
