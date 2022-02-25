import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckUserGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const resp: boolean = this.loginService.validateSession();
      if(resp){
        return true;
      }
      this.router.navigateByUrl('/login');
      
      return resp;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean{
      const resp: boolean = this.loginService.validateSession();
      if(resp){
        return true;
      }
      this.router.navigateByUrl('/login');
      return resp;
  }
}
