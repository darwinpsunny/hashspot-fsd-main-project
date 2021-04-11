import { Component, OnInit } from '@angular/core';
import { CuserserviceService } from '../cuserservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private cuserservice:CuserserviceService) { }
  user
  id=localStorage.getItem('id')
  ngOnInit(): void {
    this.cuserservice.getuser(this.id).subscribe((data)=>{
      this.user=data
    })
  }

}
