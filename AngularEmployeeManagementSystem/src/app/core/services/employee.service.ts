import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";
import{EmployeeInfo} from '../models/employeeinfo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient:HttpClient){}

  getAllEmployees():Observable<EmployeeInfo[]> {
      return this.httpclient.get<EmployeeInfo[]>("https://localhost:44390/api/EmployeeInfo/GetEmployeeInfos");
  }
  
  postEmployee( model:EmployeeInfo):Observable<EmployeeInfo>{
      return this.httpclient.post<EmployeeInfo>("https://localhost:44390/api/EmployeeInfo/AddEmployeeInfo",model);
  }
  deleteEmployee(id:number):Observable<EmployeeInfo>{
      return this.httpclient.post<EmployeeInfo>("https://localhost:44390/api/EmployeeInfo/DeleteEmployeeInfo?id="+id,'')
  }
  getEmployeeById(Id:number):Observable<EmployeeInfo>{
      return this.httpclient.get<EmployeeInfo>("https://localhost:44390/api/EmployeeInfo/GetEmployeeInfo?id="+Id);
  }
  updateEmployeee(model:EmployeeInfo):Observable<EmployeeInfo>{
      return this.httpclient.post<EmployeeInfo>("https://localhost:44390/api/EmployeeInfo/UpdateEmployeeInfo",model)
  }
}
