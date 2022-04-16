import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private router:Router){}
  canActivate():boolean
     {
    if (!!localStorage.getItem('token')){
      if(localStorage.getItem("role")==="Admin")
      {
      return true;
      }
      else
      {
        return false;
      }
    }else{
      this.router.navigateByUrl('/login')
      return false;
    }
      
  }
  
}
