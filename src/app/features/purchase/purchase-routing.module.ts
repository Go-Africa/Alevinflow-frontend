import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpurchaseComponent } from './page/addpurchase/addpurchase.component';
import { UpdatepurchaseComponent } from './page/updatepurchase/updatepurchase.component';
import { ListpurchaseComponent } from './page/listpurchase/listpurchase.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'add', component: AddpurchaseComponent},
  {path: 'update', component: UpdatepurchaseComponent },
  {path: 'list', component: ListpurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
