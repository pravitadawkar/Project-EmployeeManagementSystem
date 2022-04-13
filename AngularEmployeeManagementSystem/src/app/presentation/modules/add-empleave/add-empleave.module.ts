import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AddEmpleaveComponent} from './../../layout/add-empleave/add-empleave.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AddEmpleaveComponent}
];
@NgModule({
  declarations: [
    AddEmpleaveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddEmpleaveModule { }
