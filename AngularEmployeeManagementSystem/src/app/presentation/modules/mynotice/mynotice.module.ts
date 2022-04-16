import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MynoticeRoutingModule } from './mynotice-routing.module';
import{MynoticeComponent} from './../../employee_layout/mynotice/mynotice.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{NoticeService} from './../../../core/services/notice.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'


@NgModule({
  declarations: [
    MynoticeComponent
  ],
  imports: [
    CommonModule,
    MynoticeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[NoticeService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class MynoticeModule { }
