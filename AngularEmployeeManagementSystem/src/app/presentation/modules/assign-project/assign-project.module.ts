import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AssignProjectComponent} from './../../layout/assign-project/assign-project.component'
import { AssignProjectRoutingModule } from './assign-project-routing.module';


@NgModule({
  declarations: [
    AssignProjectComponent
  ],
  imports: [
    CommonModule,
    AssignProjectRoutingModule
  ]
})
export class AssignProjectModule { }
