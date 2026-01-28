import React from 'react';

// PUBLIC_INTERFACE
export function PageScaffold({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  /** Consistent skeleton layout for feature pages. */
  return (
    <div className="space-y-4">
      <div className="crm-card">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold text-text">{title}</h1>
          {description ? <p className="crm-muted">{description}</p> : null}
        </div>
      </div>

      {children ? <div className="space-y-4">{children}</div> : null}
    </div>
  );
}
