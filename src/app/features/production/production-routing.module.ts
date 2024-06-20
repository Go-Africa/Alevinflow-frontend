import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCycleComponent } from './pages/add-cycle/add-cycle.component';
import { UpdateCycleComponent } from './pages/update-cycle/update-cycle.component';
import { ListCycleComponent } from './pages/list-cycle/list-cycle.component';
import { DetailCycleComponent } from './pages/detail-cycle/detail-cycle.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddCycleComponent },
  { path: 'update', component: UpdateCycleComponent },
  { path: 'list', component: ListCycleComponent },
  { path: 'detail', component: DetailCycleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
