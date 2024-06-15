import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddadjustmentComponent } from './pages/addadjustment/addadjustment.component';

const routes: Routes = [
  {path: '', component: ProductlistComponent},
  {path: 'add', component: AddproductComponent},
  {path: 'adjustment', component: AddadjustmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
