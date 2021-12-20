import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { DialogLogin, LoginComponent } from './pages/login/login.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, DialogLogin],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
