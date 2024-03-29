import { HandleUserSearchService } from './../../../../core/services/handle-user-search.service';

import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../sharedModule/shared/shared.module';
import { UsersService } from '../../../../core/services/userServices/users.service';
import { users } from '../../../../core/interface/users';
import { UserFilterPipe } from '../../../../core/pipe/user-filter.pipe';
import { TableComponent } from '../../../../theme/components/table/table.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [SharedModule,UserFilterPipe,TableComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent implements OnInit {
  usersList!:users[]
  searchType!:string;
  searchValue!:string;
  constructor(private UserService:UsersService,private HandleUserSearchService:HandleUserSearchService){
    this.getUserssList()
  }
  ngOnInit(): void {
    this.HandleUserSearchService.searchType.subscribe((type)=>{
      this.searchType=type
    })
    this.HandleUserSearchService.searchValue.subscribe((value)=>{
      this.searchValue=value
    })
  }

  getUserssList(){
   this.UserService.getUsersList().subscribe((userList)=>{
    this.usersList=userList.data
   })
  }
}
