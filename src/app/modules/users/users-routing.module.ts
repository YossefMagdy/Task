import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
    {path:'',loadComponent:()=>import('../../layout/blank-layout/blank-layout.component').then((Resp)=>Resp.BlankLayoutComponent),children:[
        {path:'',redirectTo:'users-list',pathMatch:'full'},
        {path:'users-list',loadComponent:()=>import('../../modules/users/users/users-list/users-list.component').then((res)=>res.UsersListComponent)},
        {path:':id/user-detail',loadComponent:()=>import('../../modules/users/users/user-details/user-details.component').then((res)=>res.UserDetailsComponent)} 
    ]}
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class userRoutingModule{}