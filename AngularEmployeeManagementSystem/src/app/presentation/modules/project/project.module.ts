import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ProjectComponent} from './../../layout/project/project.component'
import { ProjectRoutingModule } from './project-routing.module';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{NoticeService} from './../../../core/services/notice.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[NoticeService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
  
})
export class ProjectModule { }
