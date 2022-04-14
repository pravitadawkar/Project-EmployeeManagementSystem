import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './core/gaurd/authguard.guard';
import { LoginComponent } from './presentation/layout/login/login.component';
import { MainComponent } from './presentation/layout/main/main.component';
//import{EmployeeComponent}from './presentation/layout/employee/employee.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  //{path:'**',component:LoginComponent},
  {path:'admin',component:MainComponent,canActivate:[AuthguardGuard],
  children:[
    {path:'employees',loadChildren:() =>
    import('./presentation/layout/employee/employee.module').then((m) =>m.EmployeeModule)},
    //{path:'add-employee',loadChildren:() =>
    //import('./presentation/layout/add-employee/add-employee.module').then((m) =>m.AddEmployeeModule)},
   // {path:'assign-project',loadChildren:() =>
   // import('./presentation/modules/assign-project/assign-project.module').then((m) =>m.AssignProjectModule)},
    {path:'projects',loadChildren:() =>
    import('./presentation/modules/project/project.module').then((m) =>m.ProjectModule)},
    {path:'empleave',loadChildren:() =>
    import('./presentation/modules/empleave/empleave.module').then((m) =>m.EmpleaveModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
