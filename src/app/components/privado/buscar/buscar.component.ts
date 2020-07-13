import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
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
