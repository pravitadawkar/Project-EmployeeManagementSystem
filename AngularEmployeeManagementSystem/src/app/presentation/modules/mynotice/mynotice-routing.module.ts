import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{MynoticeComponent} from './../../employee_layout/mynotice/mynotice.component'

const routes: Routes = [
  {path:'',component:MynoticeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MynoticeRoutingModule { }
