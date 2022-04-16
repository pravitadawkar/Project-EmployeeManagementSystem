import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyholidaysRoutingModule } from './myholidays-routing.module';
import{MyholidaysComponent} from './../../employee_layout/myholidays/myholidays.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{HolidaysService} from './../../../core/services/holidays.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'


@NgModule({
  declarations: [
    MyholidaysComponent
  ],
  imports: [
    CommonModule,
    MyholidaysRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[HolidaysService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class MyholidaysModule { }
