import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventualModule } from './inventual/inventual.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './features/auth/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { AddpurchaseComponent } from './features/purchase/page/addpurchase/addpurchase.component';
import { ListpurchaseComponent } from './features/purchase/page/listpurchase/listpurchase.component';
import { UpdatepurchaseComponent } from './features/purchase/page/updatepurchase/updatepurchase.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [
    AppComponent,
    AddpurchaseComponent,
    ListpurchaseComponent,
    UpdatepurchaseComponent,
    
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
