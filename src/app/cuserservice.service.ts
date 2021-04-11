import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CuserserviceService {

  constructor(private http:HttpClient) { }
  adduser(user)
  { 
    return this.http.post<any>("http://localhost:3000/csignup/signup",{"user":user});
  }
  getusers(){
    return this.http.get("http://localhost:3000/master/userdata")
  }
  getuser(id)
  {
    return this.http.get("http://localhost:3000/cuser/"+id);
  }
  loginuser(user)
  {
    return this.http.post<any>("http://localhost:3000/cuser/login",user);
  }
  loggedin(){
   
    return !!localStorage.getItem('token')
  }
}
