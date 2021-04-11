import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import{CuserserviceService} from '../cuserservice.service'
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
users
mpassword
ompassword
cpassword
ocpassword
apassword
oapassword
message=""
success=""
cmessage=""
csuccess=""
amessage=""
asuccess=""
  constructor( private adminservice:AdminService ,private cuserservice:CuserserviceService) { }

  ngOnInit(): void {
this.cuserservice.getusers().subscribe((data)=>{
  this.users=data;
  this.message=""
  this.success=""
  this.cmessage=""
  this.csuccess=""
  this.amessage=""
  this.asuccess=""
})
  }

master()
{
 this.adminservice.masterchange(this.ompassword,this.mpassword).subscribe(
   res=>{
     
     this.success=res.message},
   error=>
   {
     this.message="inavlid password"
   }
 )
}
credits()
{
  this.adminservice.creditchange(this.ocpassword,this.cpassword).subscribe(
  res=>{
     
    this.csuccess=res.message},
  error=>
  {
    this.cmessage="inavlid password"
  }
)
}
 accounts(){
  this.adminservice.accountchange(this.oapassword,this.apassword).subscribe(
    
    res=>{
     
      this.asuccess=res.message},
    error=>
    {
      this.amessage="inavlid password"
    }
  )
 }
 
}
