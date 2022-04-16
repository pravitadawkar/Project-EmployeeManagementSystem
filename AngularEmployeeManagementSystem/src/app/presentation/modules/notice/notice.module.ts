import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import{NoticeComponent} from './../../layout/notice/notice.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{NoticeService} from './../../../core/services/notice.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'

@NgModule({
  declarations: [
    NoticeComponent
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[NoticeService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class NoticeModule { }
