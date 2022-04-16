import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyleavesRoutingModule } from './myleaves-routing.module';
import{ MyleavesComponent} from './../../employee_layout/myleaves/myleaves.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{EmpleaveService} from './../../../core/services/empleave.service';
import{InterceptorService} from './../../../core/interceptors/interceptor.service'

@NgModule({
  declarations: [
    MyleavesComponent
  ],
  imports: [
    CommonModule,
    MyleavesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[EmpleaveService,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class MyleavesModule { }
