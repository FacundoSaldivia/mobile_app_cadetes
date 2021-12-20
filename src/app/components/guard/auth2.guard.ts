import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth2Guard implements CanActivate {
  constructor(private router: Router) {}

  usuarioId = localStorage.getItem('cadeteId')?.split(' ')[0].replace('"', '');
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.usuarioId) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
