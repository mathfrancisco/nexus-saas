import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard-home/dashboard-home.component')
      .then(m => m.DashboardHomeComponent)
  },
  {
    path: 'posts',
    loadComponent: () => import('./pages/posts/posts.component')
      .then(m => m.PostsComponent)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.component')
      .then(m => m.CalendarComponent)
  }
];
