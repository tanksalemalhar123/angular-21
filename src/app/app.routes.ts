import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
    { path: 'login', component: Login },
    {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  // wildcard
  { path: '**', redirectTo: 'dashboard' },
];
