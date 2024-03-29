import { users } from '../../interface/users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseResponse, Support } from '../../interface/BaseResponse';


       
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private  httpClient:HttpClient) { }

  getUsersList():Observable<BaseResponse<users>>{

    return this.httpClient.get<BaseResponse<users>>(`${this.apiUrl}?page={page}`)
  }

  getUserDetail(id:number):Observable<{data:users,support:Support}>{
    return this.httpClient.get<{data:users,support:Support}>(`${this.apiUrl}/${id}`)
  }
}

