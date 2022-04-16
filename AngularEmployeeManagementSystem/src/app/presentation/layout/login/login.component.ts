import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,FormControlName, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import{AuthServiceService} from '../../../core/services/auth-service.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  constructor( private authservice:AuthServiceService,private router:Router) { }
  

  ngOnInit(): void {
  }
  loginform(){
    this.authservice.loginForm(this.loginForm.value).subscribe(data =>{
      alert('login successfully!');
      localStorage.setItem('token',data.token);
      localStorage.setItem('userId',data.userId);
      localStorage.setItem('role',data.role);
      if(data.role==="Admin")
      {
      this.router.navigate(['admin'])
      }
      else
      {
      this.router.navigate(['employeeinfo'])

      }
    })
  }
  get username(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }


}
