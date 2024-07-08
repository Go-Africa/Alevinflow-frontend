import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnutritionComponent } from './page/addnutrition/addnutrition.component';
import { ListnutritionComponent } from './page/listnutrition/listnutrition.component';
import { AddnutritiongeComponent } from './page/addnutritionge/addnutritionge.component';
import { ListnutritiongeComponent } from './page/listnutritionge/listnutritionge.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddnutritionComponent },
  { path: 'list', component: ListnutritionComponent },
  { path: 'add', component: AddnutritiongeComponent },
  { path: 'list', component: ListnutritiongeComponent },
 
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }
