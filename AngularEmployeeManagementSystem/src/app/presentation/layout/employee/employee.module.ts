import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { EmployeeRoutingModule } from './employee-routing.module';
import{EmployeeComponent} from './employee.component';
import{EmployeeService} from './../../../core/services/employee.service'
import{InterceptorService} from './../../../core/interceptors/interceptor.service'

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[EmployeeService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class EmployeeModule { }
