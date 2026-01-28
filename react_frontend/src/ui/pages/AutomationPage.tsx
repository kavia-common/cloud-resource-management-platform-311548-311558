import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function AutomationPage() {
  /** Automation skeleton page. */
  return (
    <PageScaffold title="Automation" description="Automate actions (scheduled jobs, approvals, runbooks).">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will manage automation policies backed by Bull/Redis job processing later.
        </p>
      </div>
    </PageScaffold>
  );
}
