import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogedRoutingModule } from './loged-routing.module';
import { LogedComponent } from './loged.component';
import { DialogCloseSesion, HomeComponent } from './pages/home/home.component';
import {
  DialogContentExampleDialog,
  TravelsComponent,
} from './pages/travels/travels.component';
import { RecordComponent } from './pages/record/record.component';
import { TabbarComponent } from './component/tabbar/tabbar.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LogedComponent,
    HomeComponent,
    TravelsComponent,
    RecordComponent,
    TabbarComponent,
    DialogContentExampleDialog,
    DialogCloseSesion,
  ],
  imports: [CommonModule, LogedRoutingModule, MaterialModule],
})
export class LogedModule {}
