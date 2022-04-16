import { Component, OnInit } from '@angular/core';
import{Route,Router} from '@angular/router'

@Component({
  selector: 'app-employeemain',
  templateUrl: './employeemain.component.html',
  styleUrls: ['./employeemain.component.css']
})
export class EmployeemainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
