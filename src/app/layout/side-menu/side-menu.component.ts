import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren, signal } from '@angular/core';
  import {  Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HandleUserSearchService } from '../../core/services/handle-user-search.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [NgStyle,FormsModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit, OnDestroy {

  @ViewChild('searchInput') searchInput!:ElementRef
  menuOpen=signal<boolean>(true)
  timeOut:any;
  searchOption:string='id'
  timerOutforSearchValue:any;
  constructor(private router:Router,private HandleUserSearchService:HandleUserSearchService){

  }
  ngOnInit(): void {

  }

  handleSideMenu(){
    this.menuOpen.update((old)=>!old)
  }
  addAnimation(){
    const element=document.querySelector('.menuSwitch');
    element?.classList.add('pulse');
    this.timeOut=setTimeout(()=>{
      element?.classList.remove('pulse');
    },1300)
  }
  back(){
    window.history.back()
  }
  searchType(event:any){
    this.searchInput.nativeElement.value=''
    this.HandleUserSearchService.searchValue.next('')
    this.HandleUserSearchService.searchType.next(event.target.value)
  }
  searchValue(event:any){
    clearTimeout(this.timerOutforSearchValue)
    this.timerOutforSearchValue=setTimeout(()=>{
      this.HandleUserSearchService.searchValue.next(event.target.value)
      this.HandleUserSearchService.searchType.next(this.searchOption)
    },200)
  }
  ngOnDestroy(): void {
    clearTimeout(this.timeOut);
  }

}
