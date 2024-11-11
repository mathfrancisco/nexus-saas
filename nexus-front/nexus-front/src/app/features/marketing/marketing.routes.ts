import { Routes } from '@angular/router';

export const MARKETING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/marketing-home/marketing-home.component')
      .then(m => m.MarketingHomeComponent)
  },
  {
    path: 'posts',
    loadComponent: () => import('./pages/campaigns/campaigns.component')
      .then(m => m.CampaignsComponent)
  }
];

