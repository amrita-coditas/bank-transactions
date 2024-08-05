import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

export const routes: Routes = [
  // {
  //   path: '/',
  //   component: LoginComponent,
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'account/:email',
    component: AccountDetailComponent,
  },
];
