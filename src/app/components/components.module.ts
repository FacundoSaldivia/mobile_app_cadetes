import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TripComponent } from './trip/trip.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TripComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
