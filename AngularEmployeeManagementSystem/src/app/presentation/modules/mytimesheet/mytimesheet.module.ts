import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MytimesheetComponent} from './../../employee_layout/mytimesheet/mytimesheet.component'

import { MytimesheetRoutingModule } from './mytimesheet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{EmployeeService} from './../../../core/services/employee.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'


@NgModule({
  declarations: [MytimesheetComponent],
  imports: [
    CommonModule,
    MytimesheetRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[EmployeeService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
  
})
export class MytimesheetModule { }
