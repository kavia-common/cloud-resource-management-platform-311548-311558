import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { AppLayout } from '../ui/layout/AppLayout';
import { DashboardPage } from '../ui/pages/DashboardPage';
import { OrganizationsPage } from '../ui/pages/OrganizationsPage';
import { AccountsPage } from '../ui/pages/AccountsPage';
import { ResourcesPage } from '../ui/pages/ResourcesPage';
import { CostsPage } from '../ui/pages/CostsPage';
import { RecommendationsPage } from '../ui/pages/RecommendationsPage';
import { AutomationPage } from '../ui/pages/AutomationPage';
import { MonitoringPage } from '../ui/pages/MonitoringPage';
import { SettingsPage } from '../ui/pages/SettingsPage';
import { LoginPage } from '../ui/pages/LoginPage';
import { RegisterPage } from '../ui/pages/RegisterPage';
import { NotFoundPage } from '../ui/pages/NotFoundPage';

// PUBLIC_INTERFACE
export function AppRoutes() {
  /** Application route definitions. */
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/costs" element={<CostsPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/monitoring" element={<MonitoringPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      <Route path="/dashboard" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
