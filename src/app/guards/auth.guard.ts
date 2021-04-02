import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private sessionService: SessionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(route.url)

    if (route.url[0].path === "sign_in" || route.url[0].path === "sign_up") {
      if (this.sessionService.getIsLogin()) {
        this.router.navigate(['/index']);
      } else {
        return true;
      }
    }

    this.router.navigate(['/index']);
  }
}
