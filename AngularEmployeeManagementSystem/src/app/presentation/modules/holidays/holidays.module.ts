import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidaysRoutingModule } from './holidays-routing.module';
import{HolidaysComponent} from './../../layout/holidays/holidays.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{HolidaysService} from './../../../core/services/holidays.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'



@NgModule({
  declarations: [
    HolidaysComponent
  ],
  imports: [
    CommonModule,
    HolidaysRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[HolidaysService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class HolidaysModule { }
