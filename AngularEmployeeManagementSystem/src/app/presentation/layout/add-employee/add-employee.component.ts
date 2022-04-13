import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  EmployeeAddForm!:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.EmployeeAddForm=this.fb.group({
      //id:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address:['',Validators.required],
      emailAddress:['',Validators.required],
      dateOfBirth:['',Validators.required],
      gender:['',Validators.required],
      degree:['',Validators.required],
      joiningDate:['',Validators.required],
      departmentname:['',Validators.required]

  })
  }
  ngOnInit(): void {
  }
  get firstName(){
    return this.EmployeeAddForm.get('firstName')
  }
  get lastName(){
    return this.EmployeeAddForm.get('lastName')
  }
  get address(){
    return this.EmployeeAddForm.get('address')
  }
  get emailAddress(){
    return this.EmployeeAddForm.get('emailAddress')
  }
  get dateOfBirth(){
    return this.EmployeeAddForm.get('dateOfBirth')
  }
  get gender(){
    return this.EmployeeAddForm.get('gender')
  }
  get degree(){
    return this.EmployeeAddForm.get('degree')
  }
  get joiningDate(){
    return this.EmployeeAddForm.get('joiningDate')
  }
  get departmentname(){
    return this.EmployeeAddForm.get('departmentname')
  }

}
