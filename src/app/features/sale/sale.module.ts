import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsaleComponent } from './pages/newsale/newsale.component';
import { ManagesaleComponent } from './pages/managesale/managesale.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SaleService } from './services/sale.service';


@NgModule({
  declarations: [
    NewsaleComponent,
    ManagesaleComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SharedModule
  ],
  providers: [SaleService]
})
export class SaleModule { }
