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
import { ProfileComponent } from './presentation/layout/gotospecificemployee/profile/profile.component';
import { LeavesComponent } from './presentation/layout/gotospecificemployee/leaves/leaves.component';
import { MyprojectComponent } from './presentation/layout/gotospecificemployee/myproject/myproject.component';
import { MainemployeeComponent } from './presentation/layout/gotospecificemployee/mainemployee/mainemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
   // AdminComponent,
    //EmployeeComponent,
    LoginComponent,
   ProfileComponent,
   LeavesComponent,
   MyprojectComponent,
   MainemployeeComponent,
   
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
