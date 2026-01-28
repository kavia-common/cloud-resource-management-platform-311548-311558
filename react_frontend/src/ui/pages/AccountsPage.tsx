import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function AccountsPage() {
  /** Cloud accounts skeleton page. */
  return (
    <PageScaffold title="Accounts" description="Connect and manage AWS/Azure/GCP accounts (mocked initially).">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will show connected accounts and onboarding flows for each provider.
        </p>
      </div>
    </PageScaffold>
  );
}
