import { AuthGuard } from './auth/auth-guard.service';
import { ListComponent } from './users/list/list.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: 'users', component: ListComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }
];
