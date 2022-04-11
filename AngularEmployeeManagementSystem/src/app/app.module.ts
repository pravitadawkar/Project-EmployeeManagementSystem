import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './presentation/layout/main/main.component';
import { AdminComponent } from './presentation/layout/admin/admin.component';
import { EmployeeComponent } from './presentation/layout/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
