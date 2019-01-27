import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule }   from '@angular/forms';
import { PaymmentFormComponent } from './paymment-form/paymment-form.component';


@NgModule({
  declarations: [ProductDetailComponent, PaymmentFormComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule
  ]
})
export class ShopModule { }
