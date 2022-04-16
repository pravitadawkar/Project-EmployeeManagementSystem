import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './core/gaurd/authguard.guard';
import { LoginComponent } from './presentation/layout/login/login.component';
import { MainComponent } from './presentation/layout/main/main.component';
//import{EmployeeComponent}from './presentation/layout/employee/employee.component';
//import { UpdateemployeeComponent } from './presentation/layout/updateemployee/updateemployee.component';
import { ProfileComponent } from './presentation/layout/gotospecificemployee/profile/profile.component';
import { LeavesComponent } from './presentation/layout/gotospecificemployee/leaves/leaves.component';
import { MyprojectComponent } from './presentation/layout/gotospecificemployee/myproject/myproject.component';
import { MainemployeeComponent } from './presentation/layout/gotospecificemployee/mainemployee/mainemployee.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'admin',component:MainComponent,canActivate:[AuthguardGuard],
  children:[
    {path:'employees',loadChildren:() =>
    import('./presentation/layout/employee/employee.module').then((m) =>m.EmployeeModule)},
    {path:'projects',loadChildren:() =>
    import('./presentation/modules/project/project.module').then((m) =>m.ProjectModule)},
    {path:'empleave',loadChildren:() =>
    import('./presentation/modules/empleave/empleave.module').then((m) =>m.EmpleaveModule)},
  ]},
  {path:'employee',component:MainemployeeComponent,children:[
    {path:'myprofile',component:ProfileComponent},
    {path:'myproject',component:MyprojectComponent},
    {path:'myleaves',component:LeavesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
