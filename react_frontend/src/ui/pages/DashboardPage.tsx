import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function DashboardPage() {
  /** Dashboard skeleton page. */
  return (
    <PageScaffold title="Dashboard" description="Overview of cloud posture, costs, and recommendations.">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="crm-card">
          <div className="crm-title">Total Cost (MTD)</div>
          <div className="mt-2 text-3xl font-bold text-text">$—</div>
          <div className="mt-1 text-xs text-secondary">Placeholder KPI</div>
        </div>

        <div className="crm-card">
          <div className="crm-title">Active Resources</div>
          <div className="mt-2 text-3xl font-bold text-text">—</div>
          <div className="mt-1 text-xs text-secondary">Placeholder KPI</div>
        </div>

        <div className="crm-card">
          <div className="crm-title">Open Recommendations</div>
          <div className="mt-2 text-3xl font-bold text-text">—</div>
          <div className="mt-1 text-xs text-secondary">Placeholder KPI</div>
        </div>
      </div>

      <div className="crm-card">
        <div className="crm-title">Coming next</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text">
          <li>Cost analytics charts</li>
          <li>Resource inventory tables</li>
          <li>Recommendation workflows</li>
        </ul>
      </div>
    </PageScaffold>
  );
}
