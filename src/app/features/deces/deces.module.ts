import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecesRoutingModule } from './deces-routing.module';
import { AdddecesComponent } from './page/adddeces/adddeces.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListdecesComponent } from './page/listdeces/listdeces.component';


@NgModule({
  declarations: [
    AdddecesComponent, 
    ListdecesComponent
  ],
  imports: [
    CommonModule,
    DecesRoutingModule,
    SharedModule
  ]
})
export class DecesModule { }
