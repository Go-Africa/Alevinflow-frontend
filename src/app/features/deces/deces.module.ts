import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecesRoutingModule } from './deces-routing.module';
import { AdddecesComponent } from './page/adddeces/adddeces.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdddecesComponent
  ],
  imports: [
    CommonModule,
    DecesRoutingModule,
    SharedModule
  ]
})
export class DecesModule { }
