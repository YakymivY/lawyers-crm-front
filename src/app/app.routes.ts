import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { PublicLayoutComponent } from './core/layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './core/layouts/private-layout/private-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];
