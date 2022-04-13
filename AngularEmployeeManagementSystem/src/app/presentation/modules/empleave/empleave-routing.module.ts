import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EmpleaveComponent} from './../../layout/empleave/empleave.component'

const routes: Routes = [
  {path:'',component:EmpleaveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleaveRoutingModule { }
