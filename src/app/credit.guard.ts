import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class CreditGuard implements CanActivate {
  constructor(private auth:AdminService,private router:Router){}
  canActivate(): boolean{
    if(this.auth.creditloggedin()){
      
      return true;
  }
  else{
  //  this.router.navigate([""]);
    return false;
  }
  }
  
  
}
