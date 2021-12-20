import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guard/auth.guard';
import { Auth2Guard } from './components/guard/auth2.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dash',
    canActivate: [Auth2Guard],
    loadChildren: () =>
      import('./loged/loged.module').then((m) => m.LogedModule),
  },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
