import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: string;
  apellido: string;
  correo: string;
  direccion: string;
  password: string;

  constructor(
    private servicio: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
crearUsuario(){
  // console.log(this.nombre);
  // console.log(this.apellido);
  // console.log(this.direccion);
  // console.log(this.correo);
  // console.log(this.password);

  let user:User = new User();
  user.nombre = this.nombre;
  user.apellido = this.apellido;
  user.direccion = this.direccion;
  user.correo = this.correo;
  user.password = this.password;

  this.servicio.crearUsuario(user).subscribe(
    data=>{
      alert("Usuario creado");
      this.router.navigateByUrl("/login");
    },
    error =>{
      alert("Ocurrio un error");
      console.log("Error",error);
    }
  );

}
}
