// auth/auth.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login',      component: LoginComponent },
   {path: 'register',   component: LoginComponent },
   
];
