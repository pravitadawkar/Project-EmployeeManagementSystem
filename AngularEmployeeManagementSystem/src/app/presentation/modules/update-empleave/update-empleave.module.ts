import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{UpdateEmpleaveComponent} from './../../layout/update-empleave/update-empleave.component'
import { UpdateEmpleaveRoutingModule } from './update-empleave-routing.module';


@NgModule({
  declarations: [
    UpdateEmpleaveComponent
  ],
  imports: [
    CommonModule,
    UpdateEmpleaveRoutingModule
  ]
})
export class UpdateEmpleaveModule { }
