import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { SharedModule } from '../../sharedModule/shared/shared.module';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [SideMenuComponent,SharedModule],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
