import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  loginadmin(admin)
  {
    return this.http.post<any>("http://localhost:3000/admin/login",admin);
  }
  loggedin(){
    return ((!!localStorage.getItem('token')) && (!!localStorage.getItem("post")))
  }
  
  masterchange(ompassword,mpassword)
  {
    return this.http.post<any>("http://localhost:3000/admin/masterchange",{"ompassword":ompassword,"mpassword":mpassword})

  }
  creditchange(ocpassword,cpassword)
  {
    return this.http.post<any>("http://localhost:3000/admin/creditchange",{"ocpassword":ocpassword,"cpassword":cpassword})
  }
  accountchange(oapassword,apassword)
  {
    return this.http.post<any>("http://localhost:3000/admin/accountchange",{"oapassword":oapassword,"apassword":apassword})
  }
  creditloggedin(){
      if((localStorage.getItem("post")=="Master")||(localStorage.getItem("post")=="Credits"))
      {return true}
      else{
        return false
      }

        
  }
  masterloggedin(){
    if((localStorage.getItem("post")=="Master"))
    {return true}
    else{
      return false
    }

      
   }
   Accountloggedin(){
    if((localStorage.getItem("post")=="Master")||(localStorage.getItem("post")=="Accounts"))
    {return true}
    else{
      return false
    }

      
}


}
