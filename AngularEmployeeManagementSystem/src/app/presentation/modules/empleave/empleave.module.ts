import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{EmpleaveComponent} from './../../layout/empleave/empleave.component'
import { EmpleaveRoutingModule } from './empleave-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{EmpleaveService} from './../../../core/services/empleave.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'


@NgModule({
  declarations: [
    EmpleaveComponent
  ],
  imports: [
    CommonModule,
    EmpleaveRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[EmpleaveService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class EmpleaveModule { }
