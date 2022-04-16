import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolebaseGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean
     {
       
       let role=localStorage.getItem('role');
       if(role=='Employee'){
         return true
       }
       else{
         return false
       }
  }
  
  
}
