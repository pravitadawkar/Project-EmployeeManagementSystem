import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{UpdateProjectComponent} from './../../layout/update-project/update-project.component'
import { UpdateProjectRoutingModule } from './update-project-routing.module';


@NgModule({
  declarations: [
    UpdateProjectComponent
  ],
  imports: [
    CommonModule,
    UpdateProjectRoutingModule
  ]
})
export class UpdateProjectModule { }
