import { Component, OnInit } from '@angular/core';
import{CuserserviceService} from '../cuserservice.service'
import{Router} from '@angular/router';
@Component({
  selector: 'app-csignup',
  templateUrl: './csignup.component.html',
  styleUrls: ['./csignup.component.css']
})
export class CsignupComponent implements OnInit {
 user={
   name:"",
   email:"",
   password:"",
   phonenumber:""
 }
 password2="";
 pColor: string = '';
 p2color: string="";
 strength="";
 text:string ="";
 pbool:boolean=false;
 p2bool:boolean=false;
 nbool:boolean=false;
 ntext:string="";
 ncolor:string="";
 eColor : string = '';
 ebool:boolean=false;
  constructor(private router:Router,private cuserservice:CuserserviceService) { }
 
  ngOnInit(): void {
  }
  useradd()
  { 
        this.cuserservice.adduser(this.user).subscribe();
        this.router.navigate(['/clogin'])
  }
  password1validate(event){
   
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(this.user.password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = " password Very Weak";
            color = "red";
            break;
        case 3:
            strength = "password strength is Medium";
            color = "orange";
            break;
        case 4:
            if(this.user.password.length>=8){
            strength = "Strong password";
            color = "green";}
            else{
            strength = "password strength is Medium minuinum 8 characters required";
            color = "orange";
            }
            break;
    }
    this.pColor=color;
   this.strength=strength;
    // Password1help.innerText=strength;
    // Password1help.style.color=color;
    if(color=="green" )
    {
      this.pbool=true;
    }
    else{
      this.pbool=false;
    }
  }

  password2validate(event)
  { //alert(this.password1+this.password2)
      if(this.user.password == this.password2)
      {
          this.p2color="green";
         this.text="passwords match"
      }
      else{ 
          this.p2color="red";
          this.text="passwords doesnt match";
      }
      
  
      if(this.p2color=="green")
      {     
        this.p2bool=true;
      }
      else
      {    this.p2bool=false;
      }
  }
  numbervalidate(event)
{
    let regxp2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regxp2.test(event.target.value))
    {
        this.ncolor="blue";
     
        this.ntext="";
        this.nbool=true;

    }
    else{
        this.ncolor="red";
        this.ntext="please enter a valid number";

       
        this.nbool=false;
    }
}
emailvalidate(event) {
  let regexp=/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  if(regexp.test(event.target.value))
  {
      this.eColor=" blue";
      
      this.ebool=true;
      
  }
  else{
    this.eColor="red";
      

    this.ebool=false;
  }
}
}
