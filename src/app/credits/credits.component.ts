import { Component, OnInit } from '@angular/core';
import {CuserserviceService} from"../cuserservice.service";
import{ApplicationService} from"../application.service";
import{Router} from '@angular/router';
@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  panelOpenState = false;
  users
 submitstatus=[]
 verifystatus=[]
 runningstatus=[]
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
       if(element.application.vehicleloan.status=="accepted")
       {
          this.runningstatus.push(true)
       }
       else
       {
         this.runningstatus.push(false)
       }
       
     });
     console.log(this.submitstatus)
      
    })
  }
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
  
   verifyforaccounts(id){
   
     this.applicationservice.statustoverify(id)
     this.wait(3000);
     const currentRoute = this.router.url;
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 
   }
   reject(id){
     
     this.applicationservice.reject(id)
     this.wait(3000);
     const currentRoute = this.router.url;
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 

   }

}
