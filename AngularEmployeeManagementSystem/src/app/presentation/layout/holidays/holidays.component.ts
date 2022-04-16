import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Holidays } from 'src/app/core/models/holidays';
import{HolidaysService} from './../../../core/services/holidays.service'


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  listAllHolidays!:Holidays[];

 // this for add Employee
 HolidaysAddForm!:FormGroup;
  constructor(private _HolidaysService:HolidaysService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { 
    this.HolidaysAddForm=this.fb.group({
      //id:['',Validators.required],
      name:['',Validators.required],
      date:['',Validators.required],
      description:['',Validators.required],
     

  })
  
  }
  get name(){
    return this.HolidaysAddForm.get('name')
  }
  get date(){
    return this.HolidaysAddForm.get('date')
  }
  get description(){
    return this.HolidaysAddForm.get('description')
  }
  

  ngOnInit(): void {
    this.get_allholidays();
    
  }
  get_allholidays(){
    this._HolidaysService.getAllHolidays().subscribe
    ( data =>
      {
        this.listAllHolidays=data
      });
  
  }
  //add employee on button
  AddHolidays!:Holidays;
  add_holidays(){
     console.warn(this.HolidaysAddForm.value);
     this._HolidaysService.postHolidays(this.HolidaysAddForm.value).subscribe
    ( data =>
      {
        alert("Employee Added Successfully.")
       let btn= document.getElementById("closebtn");
       btn?.click();
        this.get_allholidays();
        //this.route.navigate([''])
      });
  }
  //delete employee on button 
  delete_holidays(id:number){
    this._HolidaysService.deleteHolidays(id).subscribe
    (data =>{
      this.get_allholidays();
      alert('delete successfully');
    })
}
}
