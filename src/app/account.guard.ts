import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import{Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(private auth:AdminService,private router:Router){}
  canActivate(): boolean{
    if(this.auth.Accountloggedin()){
      
      return true;
  }
  else{
  //  this.router.navigate([""]);
    return false;
  }
  }
  
  
}