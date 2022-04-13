import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{EmpleaveComponent} from './../../layout/empleave/empleave.component'
import { EmpleaveRoutingModule } from './empleave-routing.module';


@NgModule({
  declarations: [
    EmpleaveComponent
  ],
  imports: [
    CommonModule,
    EmpleaveRoutingModule
  ]
})
export class EmpleaveModule { }
