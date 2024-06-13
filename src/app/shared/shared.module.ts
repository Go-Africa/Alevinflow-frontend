import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventualModule } from '../inventual/inventual.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    InventualModule,
    MatIconModule,
  ],
  exports: [
    InventualModule,
    MatIconModule,
    MatPaginatorModule,
  ]
})
export class SharedModule { }
