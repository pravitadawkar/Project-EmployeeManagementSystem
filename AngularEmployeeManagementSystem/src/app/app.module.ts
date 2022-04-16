import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './presentation/layout/main/main.component';
//import { AdminComponent } from './presentation/layout/admin/admin.component';
//import { EmployeeComponent } from './presentation/layout/employee/employee.component';
import { LoginComponent } from './presentation/layout/login/login.component';
import { AuthServiceService } from './core/services/auth-service.service';
import{AuthguardGuard} from './core/gaurd/authguard.guard'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './presentation/layout/home/home.component';
import { EmployeemainComponent } from './presentation/employee_layout/employeemain/employeemain.component';
import { RolebaseGuard } from './core/gaurd/rolebase.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    EmployeemainComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthguardGuard,AuthServiceService,RolebaseGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
