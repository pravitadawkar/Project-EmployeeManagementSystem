import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './core/gaurd/authguard.guard';
import { LoginComponent } from './presentation/layout/login/login.component';
import { MainComponent } from './presentation/layout/main/main.component';
//import{EmployeeComponent}from './presentation/layout/employee/employee.component';
//import { UpdateemployeeComponent } from './presentation/layout/updateemployee/updateemployee.component';
import { HomeComponent } from './presentation/layout/home/home.component';
import { EmployeemainComponent } from './presentation/employee_layout/employeemain/employeemain.component';
import { RolebaseGuard } from './core/gaurd/rolebase.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'admin',component:MainComponent,canActivate:[AuthguardGuard],
  children:[
    {path:'home',component:HomeComponent},
    //{path:'',redirectTo:'/home'},
    {path:'employees',loadChildren:() =>
    import('./presentation/layout/employee/employee.module').then((m) =>m.EmployeeModule)},
    {path:'projects',loadChildren:() =>
    import('./presentation/modules/project/project.module').then((m) =>m.ProjectModule)},
    {path:'empleave',loadChildren:() =>
    import('./presentation/modules/empleave/empleave.module').then((m) =>m.EmpleaveModule)},
    {path:'holidays',loadChildren:() =>
    import('./presentation/modules/holidays/holidays.module').then((m) =>m.HolidaysModule)},
    {path:'notices',loadChildren:() =>
    import('./presentation/modules/notice/notice.module').then((m) =>m.NoticeModule)},
    {path:'timesheet',loadChildren:() =>
    import('./presentation/modules/timesheet/timesheet.module').then((m) =>m.TimesheetModule)},
  ]},

  {path:'employeeinfo',component:EmployeemainComponent,canActivate:[RolebaseGuard],
  children:[
    {path:'myprofile',loadChildren:() =>
    import('./presentation/modules/myprofile/myprofile.module').then((m) =>m.MyprofileModule)},
    {path:'myprojects',loadChildren:() =>
    import('./presentation/modules/myprojects/myprojects.module').then((m) =>m.MyprojectsModule)},
    {path:'myleaves',loadChildren:() =>
    import('./presentation/modules/myleaves/myleaves.module').then((m) =>m.MyleavesModule)},
    {path:'myholidays',loadChildren:() =>
    import('./presentation/modules/myholidays/myholidays.module').then((m) =>m.MyholidaysModule)},
    {path:'mynotice',loadChildren:() =>
    import('./presentation/modules/mynotice/mynotice.module').then((m) =>m.MynoticeModule)},
    {path:'mytimesheet',loadChildren:() =>
    import('./presentation/modules/mytimesheet/mytimesheet.module').then((m) =>m.MytimesheetModule)},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
