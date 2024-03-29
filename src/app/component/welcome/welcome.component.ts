import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../sharedModule/shared/shared.module';

declare var particlesJS: any;

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit,OnDestroy{
  constructor(private NgxSpinnerService:NgxSpinnerService){}

  setTimeOut:any;
  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () {
    });
    this.NgxSpinnerService.show()
    this.setTimeOut=setTimeout(() => {
      this.NgxSpinnerService.hide()
    }, 1000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeOut)
  }
}
