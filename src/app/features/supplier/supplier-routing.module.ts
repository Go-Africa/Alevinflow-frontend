import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsuplierComponent } from 'src/app/inventual/supplier/addsuplier/addsuplier.component';
import { UpdatesupplierComponent } from './updatesupplier/updatesupplier.component';
import { SupplierlistComponent } from './listsupplier/supplierlist.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddsuplierComponent},
  // {path: 'update', component: UpdatesupplierComponent},
  {path: 'list', component: SupplierlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
