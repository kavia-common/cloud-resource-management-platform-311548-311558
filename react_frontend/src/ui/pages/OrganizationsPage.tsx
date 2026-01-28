import { PageScaffold } from './_PageScaffold';

// PUBLIC_INTERFACE
export function OrganizationsPage() {
  /** Organizations skeleton page. */
  return (
    <PageScaffold title="Organizations" description="Manage organizations, members, and roles (RBAC).">
      <div className="crm-card">
        <div className="crm-title">Placeholder</div>
        <p className="mt-2 text-sm text-secondary">
          This page will list organizations and allow creation/invites once backend JWT + RBAC is wired.
        </p>
      </div>
    </PageScaffold>
  );
}
