import { Component, OnInit } from '@angular/core';
import{Route,Router} from '@angular/router'


@Component({
  selector: 'app-mainemployee',
  templateUrl: './mainemployee.component.html',
  styleUrls: ['./mainemployee.component.css']
})
export class MainemployeeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
