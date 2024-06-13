import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupplierlistComponent } from './listsupplier/supplierlist.component';
import { UpdatesupplierComponent } from './updatesupplier/updatesupplier.component';


@NgModule({
  declarations: [
    AddsupplierComponent,
    SupplierlistComponent,
    UpdatesupplierComponent,
  
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule, 
    SharedModule
  ]
})
export class SupplierModule { }
