import { Routes } from '@angular/router';
import { Registro } from './auth/registro/registro';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
