import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalibrageRoutingModule } from './calibrage-routing.module';
import { AddcalibrageComponent } from './page/addcalibrage/addcalibrage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListcalibrageComponent } from './page/listcalibrage/listcalibrage.component';
import { CustomerService } from '../customer/services/customer.service';


@NgModule({
  declarations: [
    AddcalibrageComponent,
    ListcalibrageComponent
  ],
  imports: [
    CommonModule,
    CalibrageRoutingModule, 
    SharedModule
  ],
   providers: [CustomerService]
})
export class CalibrageModule { }
