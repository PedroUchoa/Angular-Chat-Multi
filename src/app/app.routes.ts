import { Routes } from '@angular/router';
import { LoginPage } from './Pages/login-page/login-page';
import path from 'path';
import { SignUpPage } from './Pages/sign-up-page/sign-up-page';
import { ChatPage } from './Pages/chat-page/chat-page';
import { authGuard } from './Services/auth-guard';

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
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'chat',
    component: ChatPage,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
];
