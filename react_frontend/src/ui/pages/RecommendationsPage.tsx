import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function RecommendationsPage() {
  /** Recommendations skeleton page. */
  return (
    <PageScaffold title="Recommendations" description="Optimization suggestions and savings opportunities.">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will list recommendations, impact estimates, and resolution actions.
        </p>
      </div>
    </PageScaffold>
  );
}
