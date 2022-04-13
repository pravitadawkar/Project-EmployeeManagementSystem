import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './../../../core/services/employee.service';
import{EmployeeInfo} from './../../../core/models/employeeinfo'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 listAllEmployee!:EmployeeInfo[];
  constructor(private _EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this._EmployeeService.getAllEmployees().subscribe
    ( data =>
      {
        this.listAllEmployee=data
      });
  }
  get_allemployees(){
    this._EmployeeService.getAllEmployees().subscribe
    ( data =>
      {
        this.listAllEmployee=data
      });
  
  }
  delete_employee(id:number){
    this._EmployeeService.deleteEmployee(id).subscribe
    (data =>{
      this.get_allemployees();
      alert('delete successfully');
    })
}
}