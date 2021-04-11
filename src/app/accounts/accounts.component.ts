import { Component, OnInit } from '@angular/core';
import {CuserserviceService} from"../cuserservice.service";
import{ApplicationService} from"../application.service";
import{Router} from '@angular/router';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  panelOpenState = false;
  users
  submitstatus=[]
 verifystatus=[]
 waitingstatus=[]
 approvedamount
 emi
  constructor(private router:Router,private cuserservice:CuserserviceService,private applicationservice:ApplicationService) { }

  ngOnInit(): void {
    this.cuserservice.getusers().subscribe((data)=>{
      this.users=data;
      this.users.forEach(element => {
        if(element.application.vehicleloan.status=="submitted")
        {
           this.submitstatus.push(true)
        }
        else
        {
          this.submitstatus.push(false)
        }
        if(element.application.vehicleloan.status=="verified")
        {
           this.verifystatus.push(true)
        }
        else
        {
          this.verifystatus.push(false)
        }
        if(element.application.vehicleloan.status=="wait")
        {
           this.waitingstatus.push(true)
        }
        else
        {
          this.waitingstatus.push(false)
        }
        
      });
    });
  }  
     
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
    amountsubmit(id)
    {
      this.applicationservice.statustowait(id,this.approvedamount,this.emi)
      this.wait(3000);
      const currentRoute = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
       this.router.navigate([currentRoute]); // navigate to same route
   }); 
    }
}
