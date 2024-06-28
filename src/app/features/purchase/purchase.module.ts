import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddpurchaseComponent } from './pages/addpurchase/addpurchase.component';
import { ManagepurchaseComponent } from './pages/managepurchase/managepurchase.component';


@NgModule({
  declarations: [
    AddpurchaseComponent,
    ManagepurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ]
})
export class PurchaseModule { }
