import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventualModule } from '../inventual/inventual.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    InventualModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    InventualModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
