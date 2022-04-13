import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './../../layout/update-employee/update-employee.component';
import{Routes,RouterModule} from '@angular/router'

const routes: Routes = [
  {path:'',component:UpdateEmployeeComponent}
];
@NgModule({
  declarations: [
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpdateEmployeeModule { }
