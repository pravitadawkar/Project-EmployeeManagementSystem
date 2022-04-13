import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProjectComponent } from '../../layout/update-project/update-project.component';
const routes: Routes = [
  {path:'',component:UpdateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProjectRoutingModule { }
