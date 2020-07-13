import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-productonolog',
  templateUrl: './pantalla-productonolog.component.html',
  styleUrls: ['./pantalla-productonolog.component.css']
})
export class PantallaProductonologComponent implements OnInit {
user:User;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  logout(){
    localStorage.removeItem( "user" );
    this.router.navigate(['Home']);
  }
}
