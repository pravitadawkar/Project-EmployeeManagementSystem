import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{UpdateEmpleaveComponent} from './../../layout/update-empleave/update-empleave.component'
const routes: Routes = [
  {path:'',component:UpdateEmpleaveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateEmpleaveRoutingModule { }
