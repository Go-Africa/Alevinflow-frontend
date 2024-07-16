import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cycles', pathMatch: 'full' },
  {
    path: 'cycles',
    loadChildren: () => import("./modules/cycle/cycle.module").then(m => m.CycleModule)
  },
  {
    path: 'eclosions',
    loadChildren: () => import("./modules/eclosion/eclosion.module").then(m => m.EclosionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
