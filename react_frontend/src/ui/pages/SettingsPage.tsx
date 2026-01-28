import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function SettingsPage() {
  /** Settings skeleton page. */
  return (
    <PageScaffold title="Settings" description="Profile, preferences, and organization configuration.">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will include user profile settings and org-level configuration.
        </p>
      </div>
    </PageScaffold>
  );
}
