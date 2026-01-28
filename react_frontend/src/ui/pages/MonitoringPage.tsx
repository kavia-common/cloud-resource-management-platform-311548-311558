import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function MonitoringPage() {
  /** Monitoring skeleton page. */
  return (
    <PageScaffold title="Monitoring" description="Monitoring signals, alerts, and system health.">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will display alerts, job runs, and monitoring integrations.
        </p>
      </div>
    </PageScaffold>
  );
}
