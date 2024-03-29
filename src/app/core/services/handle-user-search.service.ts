import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleUserSearchService {
  searchType=new BehaviorSubject('')
  searchValue=new BehaviorSubject('')
  constructor() { }

}
