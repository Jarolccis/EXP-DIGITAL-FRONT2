import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceProductComponent } from './pages/price-product/price-product.component';

const routes: Routes = [
  {
    path: 'price',
    component: PriceProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPriceRoutingModule { }
