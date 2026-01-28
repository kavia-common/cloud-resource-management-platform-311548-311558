import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function ResourcesPage() {
  /** Resources inventory skeleton page. */
  return (
    <PageScaffold title="Resources" description="Discover resources across providers and view metadata.">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will include inventory tables, filters, and drill-down views.
        </p>
      </div>
    </PageScaffold>
  );
}
