import { Routes } from '@angular/router';
import { authGuard, redirectGuard} from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },
  {
    path: 'event/:id',
    loadComponent: () =>
      import('./features/event-detail/event-detail')
        .then(m => m.EventDetail)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
    path: '**',
    redirectTo: ''
  }
];