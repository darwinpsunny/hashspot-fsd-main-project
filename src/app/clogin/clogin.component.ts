import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {CuserserviceService} from '../cuserservice.service'
import{Router} from '@angular/router';
import { _ViewRepeaterOperation } from '@angular/cdk/collections';
@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})

export class CloginComponent implements OnInit {

 user ={
   email:"",
   password:""
 }
 message="";
  constructor(private cuserservice:CuserserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  userverify()
  { this.cuserservice.loginuser(this.user)
    .subscribe(
      res=>{ 
        localStorage.clear();
        localStorage.setItem("token",res.token);
        localStorage.setItem("id",res.user._id)
    this.router.navigate(['/user/services']);},
    error=>
    {
      this.message="invalid credentials";
    }   );
  
  }
}
