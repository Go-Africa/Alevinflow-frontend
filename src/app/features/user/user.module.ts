import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';


@NgModule({
  declarations: [
    AdduserComponent,
    ListuserComponent,
    UpdateuserComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
