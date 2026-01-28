import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function CostsPage() {
  /** Costs analytics skeleton page. */
  return (
    <PageScaffold title="Costs" description="Cost analytics, breakdowns, and trends.">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will include charts, spend breakdowns, and budgets once cost pipeline is implemented.
        </p>
      </div>
    </PageScaffold>
  );
}
