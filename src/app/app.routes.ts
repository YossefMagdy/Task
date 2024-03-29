import { Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';

export const routes: Routes = [

    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'welcome',component:WelcomeComponent},
    {path:'users',loadChildren:()=>import('./modules/users/users.module').then((res)=>res.UsersModule)},
];
