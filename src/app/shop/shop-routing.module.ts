import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaymmentFormComponent } from './paymment-form/paymment-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentNotificationComponent } from './payment-notification/payment-notification.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'payment-info', component: PaymmentFormComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'payment-notice', component: PaymentNotificationComponent },
  { path: 'about', component: AboutUsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
