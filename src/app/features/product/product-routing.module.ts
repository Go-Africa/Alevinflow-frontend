import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgeniteurComponent } from './pages/addgeniteur/addgeniteur.component';
import { AddalimentComponent } from './pages/addaliment/addaliment.component';
import { ListproductComponent } from './pages/listproduct/listproduct.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddgeniteurComponent},
  {path: 'add_aliment', component: AddalimentComponent},
  {path: 'list', component: ListproductComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
