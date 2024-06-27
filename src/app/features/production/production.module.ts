import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { AddCycleComponent } from './pages/add-cycle/add-cycle.component';
import { ListCycleComponent } from './pages/list-cycle/list-cycle.component';
import { DetailCycleComponent } from './pages/detail-cycle/detail-cycle.component';
import { UpdateCycleComponent } from './pages/update-cycle/update-cycle.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductionResolver } from './resolvers/production.resolver';


@NgModule({
  declarations: [
    AddCycleComponent,
    ListCycleComponent,
    DetailCycleComponent,
    UpdateCycleComponent
  ],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    SharedModule
  ],
  providers: [ProductionResolver]
})
export class ProductionModule { }
