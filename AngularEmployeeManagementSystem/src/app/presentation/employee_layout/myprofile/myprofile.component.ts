import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './../../../core/services/employee.service';
import{EmployeeInfo} from './../../../core/models/employeeinfo';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  EmployeeForm=new FormGroup({
  id:new FormControl(''),
firstName:new FormControl(''),
 lastName:new FormControl(''),
 address:new FormControl(''),
 emailAddress:new FormControl(''),
 dateOfBirth:new FormControl(''),
 gender:new FormControl(''),
 degree:new FormControl(''),
 joiningDate:new FormControl(''),
 departmentName:new FormControl('')
   })

   constructor(private _EmployeeService:EmployeeService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { }
     
   ngOnInit(): void {
    let Id=this.router.snapshot.params['id'];
      this._EmployeeService.getEmployeeById(localStorage.getItem("userId")||"").
      subscribe((data)=>{
        this.EmployeeForm=new FormGroup({
          id:new FormControl(data['id']),
          firstName:new FormControl(data['firstName']),
          lastName:new FormControl(data['lastName']),
          address:new FormControl(data['address']),
          emailAddress:new FormControl(data['emailAddress']),
          dateOfBirth:new FormControl(data['dateOfBirth']),
          gender:new FormControl(data['gender']),
           degree:new FormControl(data['degree']),
           joiningDate:new FormControl(data['joiningDate']),
           departmentName:new FormControl(data['departmentName'])
    
        })
      })
    
   }
}
