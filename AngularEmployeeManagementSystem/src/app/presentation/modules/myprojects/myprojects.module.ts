import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MyprojectsComponent} from './../../employee_layout/myprojects/myprojects.component'
import { MyprojectsRoutingModule } from './myprojects-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{ProjectsService} from './../../../core/services/projects.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'


@NgModule({
  declarations: [
    MyprojectsComponent
  ],
  imports: [
    CommonModule,
    MyprojectsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ProjectsService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
  
})
export class MyprojectsModule { }
