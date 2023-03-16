import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    title: 'Home'
  },
  {
    component: OrdersComponent,
    path: 'shop/orders',
    title: 'Orders'
  },

  {
    component: PaymentsComponent,
    path: 'shop/payments',
    title: 'Payments'
  },
  {
    component: ProfileComponent,
    path: 'users/profile',
    title: 'Profile'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
