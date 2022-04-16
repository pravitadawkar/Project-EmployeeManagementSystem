import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Notice } from 'src/app/core/models/notice';
import{NoticeService} from './../../../core/services/notice.service'


@Component({
  selector: 'app-mynotice',
  templateUrl: './mynotice.component.html',
  styleUrls: ['./mynotice.component.css']
})
export class MynoticeComponent implements OnInit {

  listAllNotice!:Notice[];

  // this for add Employee
  NoticeAddForm!:FormGroup;
   constructor(private _NoticeService:NoticeService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { 
     this.NoticeAddForm=this.fb.group({
       //id:['',Validators.required],
       title:['',Validators.required],
       date:['',Validators.required],
       description:['',Validators.required],
       
 
   })
   
   }
   get title(){
     return this.NoticeAddForm.get('title')
   }
   get date(){
     return this.NoticeAddForm.get('date')
   }
   get description(){
     return this.NoticeAddForm.get('description')
   }
   
 
   ngOnInit(): void {
     this._NoticeService.getAllNotice().subscribe
     ( data =>
       {
         this.listAllNotice=data
       });
   }

}
