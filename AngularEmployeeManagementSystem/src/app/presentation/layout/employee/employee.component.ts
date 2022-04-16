import { Component, OnInit } from '@angular/core';
import{EmployeeService} from './../../../core/services/employee.service';
import{EmployeeInfo} from './../../../core/models/employeeinfo';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 listAllEmployee!:EmployeeInfo[];

 // this for add Employee
 EmployeeAddForm!:FormGroup;
  constructor(private _EmployeeService:EmployeeService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { 
    this.EmployeeAddForm=this.fb.group({
      //id:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address:['',Validators.required],
      emailAddress:['',Validators.required,Validators.email],
      dateOfBirth:['',Validators.required],
      gender:['',Validators.required],
      degree:['',Validators.required],
      joiningDate:['',Validators.required],
      departmentName:['',Validators.required]

  })
  
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
  get departmentName(){
    return this.EmployeeAddForm.get('departmentName')
  }
 //get specific employees values for edit
//  empaddForm=new FormGroup({
//   id:new FormControl(''),
// firstName:new FormControl(''),
// //supplieraddress:this.fb.group({
//  lastName:new FormControl(''),
//  address:new FormControl(''),
//  emailAddress:new FormControl(''),
//  dateOfBirth:new FormControl(''),
//  gender:new FormControl(''),
//  degree:new FormControl(''),
//  joiningDate:new FormControl(''),
//  departmentName:new FormControl('')

// })
//  get_specific_employee(){
//  let Id=this.router.snapshot.params['id'];
//   this._EmployeeService.getEmployeeById(Id).
//   subscribe((data)=>{
//     this.empaddForm=new FormGroup({
//       id:new FormControl(data['id']),
//       firstName:new FormControl(data['firstName']),
//       lastName:new FormControl(data['lastName']),
//       address:new FormControl(data['address']),
//       emailAddress:new FormControl(data['emailAddress']),
//       dateOfBirth:new FormControl(data['dateOfBirth']),
//        gender:new FormControl(data['gender']),
//        degree:new FormControl(data['degree']),
//        joiningDate:new FormControl(data['joiningDate']),
//        departmentname:new FormControl(data['departmentName'])

//     })
//   })
// }
  //get all employee 
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
  //add employee on button
  AddEmployee!:EmployeeInfo;
  add_employee(){
     console.warn(this.EmployeeAddForm.value);
     this._EmployeeService.postEmployee(this.EmployeeAddForm.value).subscribe
    ( data =>
      {
        alert("Employee Added Successfully.")
       let btn= document.getElementById("closebtn");
       btn?.click();
        this.get_allemployees();
        //this.route.navigate([''])
      });
  }
  // //update employee on button click
  // update_employee(){
  //   console.warn(this.empaddForm.value);
  // debugger
  // this._EmployeeService.updateEmployeee(this.empaddForm.value).
  // subscribe(data =>{
  //   alert("employee update Successfully.")
  //   //this.route.navigate(['/supplierdetail'])
  //   console.warn(data);
  // })
  // }

  //delete employee on button 
  delete_employee(id:number){
    this._EmployeeService.deleteEmployee(id).subscribe
    (data =>{
      this.get_allemployees();
      alert('delete successfully');
    })
}
}