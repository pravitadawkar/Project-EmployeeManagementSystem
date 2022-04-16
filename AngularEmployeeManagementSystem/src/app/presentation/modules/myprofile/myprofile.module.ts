import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import{MyprofileComponent} from './../../employee_layout/myprofile/myprofile.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{EmployeeService} from './../../../core/services/employee.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'

@NgModule({
  declarations: [
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    MyprofileRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[EmployeeService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
  
})
export class MyprofileModule { }
