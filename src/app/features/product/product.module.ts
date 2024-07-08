import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddgeniteurComponent } from './pages/addgeniteur/addgeniteur.component';
import { AddalimentComponent } from './pages/addaliment/addaliment.component';
import { ListproductComponent } from './pages/listproduct/listproduct.component';


@NgModule({
  declarations: [ 
    AddproductComponent, 
    AddgeniteurComponent,
    AddalimentComponent,
    ListproductComponent

  ],
  imports: [
    CommonModule,
    ProductRoutingModule, 
    SharedModule
  ]
})
export class ProductModule { }
