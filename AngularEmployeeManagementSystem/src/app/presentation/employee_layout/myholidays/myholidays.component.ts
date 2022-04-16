import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Holidays } from 'src/app/core/models/holidays';
import{HolidaysService} from './../../../core/services/holidays.service'


@Component({
  selector: 'app-myholidays',
  templateUrl: './myholidays.component.html',
  styleUrls: ['./myholidays.component.css']
})
export class MyholidaysComponent implements OnInit {
  listAllHolidays!:Holidays[];
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
    this._HolidaysService.getAllHolidays().subscribe
    ( data =>
      {
        this.listAllHolidays=data
      });
  }

}
