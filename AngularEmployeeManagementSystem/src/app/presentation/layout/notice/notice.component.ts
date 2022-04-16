import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Notice } from 'src/app/core/models/notice';
import{NoticeService} from './../../../core/services/notice.service'


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

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
  get_allnotice(){
    this._NoticeService.getAllNotice().subscribe
    ( data =>
      {
        this.listAllNotice=data
      });
  
  }
  //add employee on button
  AddEmployee!:Notice;
  add_notice(){
     console.warn(this.NoticeAddForm.value);
     this._NoticeService.postNotice(this.NoticeAddForm.value).subscribe
    ( data =>
      {
        alert("Employee Added Successfully.")
       let btn= document.getElementById("closebtn");
       btn?.click();
        this.get_allnotice();
        //this.route.navigate([''])
      });
  }
  //delete employee on button 
  delete_notice(id:number){
    this._NoticeService.deleteNotice(id).subscribe
    (data =>{
      this.get_allnotice();
      alert('delete successfully');
    })
}
}
