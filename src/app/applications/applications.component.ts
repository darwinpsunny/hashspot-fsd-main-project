import { Component, OnInit } from '@angular/core';
import { CuserserviceService } from '../cuserservice.service';
import {ApplicationService} from '../application.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  user
  id=localStorage.getItem('id')
  value
  submitted
  statustext
  panelOpenState = false;
  Ddate
  color
  statuswait=false;
  constructor(private router:Router, private cuserservice:CuserserviceService,private applicationservice:ApplicationService) { }

  ngOnInit(): void {
    
    
      this.cuserservice.getuser(this.id).subscribe((data)=>{
        this.user=data
   
      if(this.user.application.vehicleloan.status=="notsubmitted")
      {
        this.value=0;
        this.submitted=true;
        this.statustext="you have not submitted the application details"
    
      }
      else if(this.user.application.vehicleloan.status=="submitted")
      {
        this.value=20;
        this.statustext="your application is submitted and being processed"
      }
      else if(this.user.application.vehicleloan.status=="verified")
      {
        this.value=40;
        this.statustext="your application is submitted and  details have been verified"
      }
      else if(this.user.application.vehicleloan.status=="rejected")
      {
         this.color="warn"
         this.value=100
         this.submitted=true
         this.statustext="your application is rejected please contact for more details"
      }
      else if(this.user.application.vehicleloan.status=="wait"){
        this.value=80;
        this.statuswait=true

           
      }
      else if(this.user.application.vehicleloan.status=="accepted"){
        this.value=100;
        this.statustext="your application is approved and our executive will contact you for amount collection and other details.Thank you!"

           
      }
    })
    console.log(this.submitted)
  }
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
  vehicleloan={
    status:"",
    aadharno:Number,
    address:"",
    pincode:Number,
    age:Number,
    gender:"",
    occupation:"",
    monthlyincome:"",
    neworold:"",
    fuel:"",
    manufacturingyear:Number,
    marketprice:Number,
    company:"",
    model:"",
    amountrequired:Number,
    date:"",
    approvedamonut:Number,
    emi:Number

}
  vehicleloansubmit()
  {
    
    this.vehicleloan.status="submitted"
    this.Ddate=new Date()
    this.vehicleloan.date=this.Ddate.toDateString()
   this.applicationservice.vehicleloansubmit(this.vehicleloan,this.id)
   this.wait(3000);
   const currentRoute = this.router.url;
   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]); // navigate to same route
  }); 
  }
  amountaccept(){
    
   this.applicationservice.amountaccept(this.id)
    
    this.wait(3000);
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
     this.router.navigate([currentRoute]); // navigate to same route
   }); 
  }
  amountreject(){

  
   this.applicationservice.reject(this.id)
    this.wait(3000);
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
     this.router.navigate([currentRoute]); // navigate to same route
   }); 
  }
 
}
