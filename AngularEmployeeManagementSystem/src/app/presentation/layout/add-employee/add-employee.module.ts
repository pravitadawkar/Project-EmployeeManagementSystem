import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import{AddEmployeeComponent} from './add-employee.component'

@NgModule({
  declarations: [
    AddEmployeeComponent

  ],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AddEmployeeModule { }
