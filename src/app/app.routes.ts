import { Routes } from '@angular/router';
import { LoginPage } from './Pages/login-page/login-page';
import path from 'path';
import { SignUpPage } from './Pages/sign-up-page/sign-up-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPage,
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    component: SignUpPage,
    pathMatch:'full'
  },
];
