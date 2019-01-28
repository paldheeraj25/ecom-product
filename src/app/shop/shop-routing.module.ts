import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaymmentFormComponent } from './paymment-form/paymment-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'detail', component: ProductDetailComponent },
  { path: 'payment-info', component: PaymmentFormComponent },
  { path: 'list', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
