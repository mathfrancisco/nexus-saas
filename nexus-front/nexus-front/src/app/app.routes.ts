import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutes } from './features/dashboard/dashboard.routes';
import { MarketingRoutes } from './features/marketing/marketing.routes';
import { AnalyticsRoutes } from './features/analytics/analytics.routes';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./features/marketing/marketing.routes').then(m => m.MARKETING_ROUTES)
  },
  {
    path: 'analytics',
    loadChildren: () => import('./features/analytics/analytics.routes').then(m => m.ANALYTICS_ROUTES)
  }
];

export const APP_ROUTES = routes;
