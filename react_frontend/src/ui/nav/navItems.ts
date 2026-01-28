export type NavItem = {
  label: string;
  to: string;
};

export const navItems: NavItem[] = [
  { label: 'Dashboard', to: '/' },
  { label: 'Organizations', to: '/organizations' },
  { label: 'Accounts', to: '/accounts' },
  { label: 'Resources', to: '/resources' },
  { label: 'Costs', to: '/costs' },
  { label: 'Recommendations', to: '/recommendations' },
  { label: 'Automation', to: '/automation' },
  { label: 'Monitoring', to: '/monitoring' },
  { label: 'Settings', to: '/settings' }
];
