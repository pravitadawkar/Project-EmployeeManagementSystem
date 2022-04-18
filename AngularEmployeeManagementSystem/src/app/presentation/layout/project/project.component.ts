import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName,FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/core/models/project';
import{ProjectsService} from './../../../core/services/projects.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  listAllProjects!:Project[];

 // this for add Employee
 ProjectAddForm!:FormGroup;
  constructor(private _ProjectsService:ProjectsService,private fb:FormBuilder,private route:Router,private router:ActivatedRoute) { 
    this.ProjectAddForm=this.fb.group({
      //id:['',Validators.required],
      projectName:['',Validators.required],
      dueDate:['',Validators.required],
      submitDate:['',Validators.required],
      status:['',Validators.required],

  })
  
  }
  get projectName(){
    return this.ProjectAddForm.get('projectName')
  }
  get dueDate(){
    return this.ProjectAddForm.get('dueDate')
  }
  get submitDate(){
    return this.ProjectAddForm.get('submitDate')
  }
  get status(){
    return this.ProjectAddForm.get('status')
  }
  

  ngOnInit(): void {
    this._ProjectsService.getAllProjects().subscribe
    ( data =>
      {
        this.listAllProjects=data
      });
  }
  get_allprojects(){
    this._ProjectsService.getAllProjects().subscribe
    ( data =>
      {
        this.listAllProjects=data
      });
  
  }
  //add notice on button
  AddProject!:Project;
  add_project(){
     console.warn(this.ProjectAddForm.value);
     this._ProjectsService.postProject(this.ProjectAddForm.value).subscribe
    ( data =>
      {
        alert("project Added Successfully.")
       let btn= document.getElementById("closebtn");
       btn?.click();
        this.get_allprojects();
        //this.route.navigate([''])
      });
  }
  //delete notice on button 
  delete_project(id:number){
    this._ProjectsService.deleteProject(id).subscribe
    (data =>{
      this.get_allprojects();
      alert('delete successfully');
    })
}

}
