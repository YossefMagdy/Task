import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../core/services/userServices/users.service';
import { users } from '../../../../core/interface/users';
import { SharedModule } from '../../../../sharedModule/shared/shared.module';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute,
    private UsersService:UsersService
    ){}
  userId!:number;
  userDetail!:users;
  headerImage=`url('https://material.angular.io/assets/img/examples/shiba1.jpg')`
  ngOnInit(){
    this.userId=this.route.snapshot.params['id']
    this.route.params.subscribe((userId)=>{
      this.userId=userId['id']
    })
    this.getUserDetail()
  }

  getUserDetail(){ 
    this.UsersService.getUserDetail(this.userId).subscribe((res)=>{
      this.userDetail=res.data
      this.headerImage=`url('${res.data.avatar}')`
    })
  }

}
