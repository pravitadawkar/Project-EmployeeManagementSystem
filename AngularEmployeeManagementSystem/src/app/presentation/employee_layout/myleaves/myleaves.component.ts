import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Empleave } from 'src/app/core/models/empleave';
import{EmpleaveService} from './../../../core/services/empleave.service'

@Component({
  selector: 'app-myleaves',
  templateUrl: './myleaves.component.html',
  styleUrls: ['./myleaves.component.css']
})
export class MyleavesComponent implements OnInit {

  listAllEmpleave!:Empleave[];

 // this for add Employee
 EmpleaveAddForm!:FormGroup;
  constructor(private _EmpleaveService:EmpleaveService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { 
    this.EmpleaveAddForm=this.fb.group({
      empLeaveId:[0,Validators.required],
      employeeId:[localStorage.getItem("userId"),Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      reason:['',Validators.required],
      status:['',Validators.required],

  })
  
  }

  get empLeaveId(){
    return this.EmpleaveAddForm.get('empLeaveId')
  }
  get employeeId(){
    return this.EmpleaveAddForm.get('employeeId')
  }
  get startDate(){
    return this.EmpleaveAddForm.get('startDate')
  }
  get endDate(){
    return this.EmpleaveAddForm.get('endDate')
  }
  get reason(){
    return this.EmpleaveAddForm.get('reason')
  }
  get status(){
    return this.EmpleaveAddForm.get('status')
  }
 
  //get all employee 
  ngOnInit(): void {
    this.get_allempleaves();
  }
  get_allempleaves(){
    this._EmpleaveService.getEmpleaveById(localStorage.getItem("userId")||"").subscribe
    ( data =>
      {
        this.listAllEmpleave=data
      });
  
  }
  //add employee on button
  
  add_empleave(){
     this._EmpleaveService.postEmpleave(this.EmpleaveAddForm.value).subscribe
    ( data =>
      {
        alert("Employee Added Successfully.");
        this.get_allempleaves();
        //this.route.navigate([''])
      });
  }

  //delete employee on button 
  delete_empleave(id:number){
    this._EmpleaveService.deleteEmpleave(id).subscribe
    (data =>{
      this.get_allempleaves();
      alert('delete successfully');
    })
}
}


