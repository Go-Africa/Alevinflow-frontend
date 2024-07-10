import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { AddnutritionComponent } from './page/addnutrition/addnutrition.component';
import { ListnutritionComponent } from './page/listnutrition/listnutrition.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddnutritiongeComponent } from './page/addnutritionge/addnutritionge.component';
import { ListnutritiongeComponent } from './page/listnutritionge/listnutritionge.component';


@NgModule({
  declarations: [
    AddnutritionComponent,
    ListnutritionComponent,
    AddnutritiongeComponent,
    ListnutritiongeComponent
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule, 
    SharedModule
  ]
})
export class NutritionModule { }
