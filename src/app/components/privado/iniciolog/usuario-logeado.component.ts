import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-logeado',
  templateUrl: './usuario-logeado.component.html',
  styleUrls: ['./usuario-logeado.component.css']
})
export class UsuarioLogeadoComponent implements OnInit {
  user:User;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user)
  }
  logout(){
    localStorage.removeItem( "user" );
    this.router.navigate(['login']);
  }

}
