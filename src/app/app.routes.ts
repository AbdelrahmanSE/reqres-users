import { ListComponent } from './users/list/list.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: 'users', component: ListComponent },
  { path: '', component: LoginComponent }
];
