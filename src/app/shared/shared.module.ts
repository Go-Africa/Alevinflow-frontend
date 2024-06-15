import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { InventualModule } from '../inventual/inventual.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CopyrightComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    InventualModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    InventualModule,
    HeaderComponent,
    CopyrightComponent,
    ContentLayoutComponent
  ]
})
export class SharedModule { }
