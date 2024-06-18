import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsuplierComponent } from 'src/app/inventual/supplier/addsuplier/addsuplier.component';
import { UpdatesupplierComponent } from './pages/updatesupplier/updatesupplier.component';
import { SupplierlistComponent } from './pages/listsupplier/supplierlist.component';
import { DetailsupplierComponent } from './pages/detailsupplier/detailsupplier.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddsuplierComponent},
  {path: 'update', component: UpdatesupplierComponent},
  {path: 'list', component: SupplierlistComponent},
  {path: 'detail', component: DetailsupplierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
