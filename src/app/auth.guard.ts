import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';
import {CuserserviceService} from "./cuserservice.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:CuserserviceService,private router:Router){}
  canActivate(): boolean{
    if(this.auth.loggedin()){
      
      return true;
  }
  else{
   this.router.navigate([""]);
    return false;
  }
  }
  
}

