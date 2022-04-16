import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{MytimesheetComponent} from './../../employee_layout/mytimesheet/mytimesheet.component'

const routes: Routes = [
  {path:'',component:MytimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytimesheetRoutingModule { }
