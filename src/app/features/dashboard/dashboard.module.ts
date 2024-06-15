import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BarchartComponent } from './pages/charts/barchart/barchart.component';
import { LinechartComponent } from './pages/charts/linechart/linechart.component';
import { PiechartComponent } from './pages/charts/piechart/piechart.component';
import { QuickviewComponent } from './pages/quickview/quickview.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { TopsellerComponent } from './pages/topseller/topseller.component';
import { UserComponent } from './pages/user/user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BarchartComponent,
    LinechartComponent,
    PiechartComponent,
    QuickviewComponent,
    CalenderComponent,
    SupplierComponent,
    TransactionComponent,
    TopsellerComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
