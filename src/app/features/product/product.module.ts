import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddbrandComponent } from './pages/addbrand/addbrand.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddadjustmentComponent } from './pages/addadjustment/addadjustment.component';
import { AdjustmentComponent } from './pages/adjustment/adjustment.component';
import { GeneratebarcodeComponent } from './pages/generatebarcode/generatebarcode.component';
import { ProductcategoryComponent } from './pages/productcategory/productcategory.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { UnitComponent } from './pages/unit/unit.component';


@NgModule({
  declarations: [
    AddbrandComponent,
    AddproductComponent,
    AddadjustmentComponent,
    AdjustmentComponent,
    GeneratebarcodeComponent,
    ProductcategoryComponent,
    ProductlistComponent,
    UnitComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
  ]
})
export class ProductModule { }
