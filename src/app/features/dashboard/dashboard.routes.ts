// dashboard/dashboard.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'stats', loadComponent: () => import('./components/stats.component').then(m => m.StatsComponent) },
      { path: '', redirectTo: 'stats', pathMatch: 'full' }
    ]
  }
];


