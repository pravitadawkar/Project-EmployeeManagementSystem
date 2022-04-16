import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ MyleavesComponent} from './../../employee_layout/myleaves/myleaves.component'

const routes: Routes = [
  {path:'',component:MyleavesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyleavesRoutingModule { }
