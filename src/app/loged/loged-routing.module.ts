import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogedComponent } from './loged.component';
import { HomeComponent } from './pages/home/home.component';
import { RecordComponent } from './pages/record/record.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { TabbarComponent } from './component/tabbar/tabbar.component';
import { AuthGuard } from '../components/guard/auth.guard';
import { Auth2Guard } from '../components/guard/auth2.guard';

const routes: Routes = [
  {
    path: '',
    component: LogedComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'viajes', component: TravelsComponent },
      { path: 'historial', component: RecordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogedRoutingModule {}
