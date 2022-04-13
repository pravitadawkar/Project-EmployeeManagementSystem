import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './presentation/layout/main/main.component';
import { AdminComponent } from './presentation/layout/admin/admin.component';
//import { EmployeeComponent } from './presentation/layout/employee/employee.component';
import { LoginComponent } from './presentation/layout/login/login.component';
import { AuthServiceService } from './core/services/auth-service.service';
import{AuthguardGuard} from './core/gaurd/authguard.guard'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
//import{InterceptorService} from './core/interceptors/interceptor.service'
// import { UpdateEmployeeComponent } from './presentation/layout/update-employee/update-employee.component';
// import { ProjectComponent } from './presentation/layout/project/project.component';
// import { AssignProjectComponent } from './presentation/layout/assign-project/assign-project.component';
// import { UpdateProjectComponent } from './presentation/layout/update-project/update-project.component';
// import { EmpleaveComponent } from './presentation/layout/empleave/empleave.component';
// import { AddEmpleaveComponent } from './presentation/layout/add-empleave/add-empleave.component';
// import { UpdateEmpleaveComponent } from './presentation/layout/update-empleave/update-empleave.component';
//import { AddEmployeeComponent } from './presentation/layout/add-employee/add-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    //EmployeeComponent,
    LoginComponent,
    // UpdateEmployeeComponent,
    // ProjectComponent,
    // AssignProjectComponent,
    // UpdateProjectComponent,
    // EmpleaveComponent,
    // AddEmpleaveComponent,
    // UpdateEmpleaveComponent,
    //AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthguardGuard,AuthServiceService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
