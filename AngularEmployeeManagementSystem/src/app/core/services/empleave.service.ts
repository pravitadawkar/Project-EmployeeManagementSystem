import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient,HttpParams} from "@angular/common/http";
import{Empleave} from '../models/empleave';


@Injectable({
  providedIn: 'root'
})
export class EmpleaveService {

  constructor(private httpclient:HttpClient) { }
  getAllEmpleave():Observable<Empleave[]> {
    return this.httpclient.get<Empleave[]>("https://localhost:44390/api/EmpLeave/EmployeeLeaves");
}

postEmpleave( model:Empleave):Observable<Empleave>{
    return this.httpclient.post<Empleave>("https://localhost:44390/api/EmpLeave/AddEmployeeLeave",model);
}
deleteEmpleave(id:number):Observable<Empleave>{
    return this.httpclient.post<Empleave>("https://localhost:44390/api/EmpLeave/DeleteEmployeeLaeve?id="+id,'')
}
getEmpleaveById(Id:string):Observable<Empleave[]>{
    return this.httpclient.get<Empleave[]>("https://localhost:44390/api/EmpLeave/EmployeeLeaveById?id="+Id);
}
updateEmpleave(model:Empleave):Observable<Empleave>{
    return this.httpclient.post<Empleave>("https://localhost:44390/api/EmpLeave/UpdateEmployeeLeave",model)
}
}
