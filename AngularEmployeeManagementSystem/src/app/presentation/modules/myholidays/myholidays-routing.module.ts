import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{MyholidaysComponent} from './../../employee_layout/myholidays/myholidays.component'

const routes: Routes = [
  {path:'',component:MyholidaysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyholidaysRoutingModule { }
