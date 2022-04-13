import { Component, OnInit } from '@angular/core';
import{Route,Router} from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
