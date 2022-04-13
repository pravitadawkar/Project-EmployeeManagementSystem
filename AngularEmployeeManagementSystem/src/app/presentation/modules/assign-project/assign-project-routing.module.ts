import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AssignProjectComponent} from './../../layout/assign-project/assign-project.component'

const routes: Routes = [
  {path:'',component:AssignProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignProjectRoutingModule { }
