import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
   admin={post:"",
   password:""}
   message
  constructor( private router:Router,private adminservice:AdminService) { }

  ngOnInit(): void {
  }
  alogin(){
    this.adminservice.loginadmin(this.admin)
    .subscribe(
      res=>{ 
        localStorage.setItem("token",res.token);
        localStorage.setItem("id",res.admin._id)
        localStorage.setItem("post",res.admin.post)
    if(res.admin.post=="Master")
    {
      this.router.navigate(['/admin/master']);
    }
    else if(res.admin.post=="Credits")
    {
      this.router.navigate(['/admin/credits']);
    }
    else if(res.admin.post=="Accounts")
    {
      this.router.navigate(['/admin/accounts']);
    }
  },
    error=>
    {
      this.message="invalid Password";
    }   );

  }

}
