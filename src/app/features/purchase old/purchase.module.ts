import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddpurchaseComponent } from './page/addpurchase/addpurchase.component';
import { UpdatepurchaseComponent } from './page/updatepurchase/updatepurchase.component';
import { ListpurchaseComponent } from './page/listpurchase/listpurchase.component';



@NgModule({
  declarations: [
    AddpurchaseComponent,
    UpdatepurchaseComponent,
    ListpurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ]
})
export class PurchaseModule { }
