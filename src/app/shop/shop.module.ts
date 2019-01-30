import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { PaymmentFormComponent } from './paymment-form/paymment-form.component';
import { ProductListComponent } from './product-list/product-list.component';

import { PaymentNotificationComponent } from './payment-notification/payment-notification.component';
import { CountdownModule } from 'ngx-countdown';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [ProductDetailComponent, PaymmentFormComponent, ProductListComponent, PaymentNotificationComponent, AboutUsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    CountdownModule
  ]
})
export class ShopModule { }
