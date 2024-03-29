import { Pipe, PipeTransform } from '@angular/core';
import { users } from '../interface/users';

@Pipe({
  name: 'userFilter',
  standalone: true
})
export class UserFilterPipe implements PipeTransform {

  transform(users: users[], searchValue: string ,searchType:string):any {

    
      if(searchType=='id'&&searchValue.length>0){
        return users.filter((e)=>{
          return e.id==(+searchValue)
        })
      }else if(searchType=='name'){
        return users.filter((e)=>{
          return e.first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
      }else if(searchType=='email'){
        return users.filter((e)=>{
          return e.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
      }else{
        return users
      }
     

    
  }

}
