import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [ 
  ],
  exports:[
    RouterModule,
    CommonModule,
    NgxSpinnerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
