import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
nombre:string;
direccion:string;
apellido:string;
email:string;
password:string;
idUsuario:number;
  constructor(private servicio: UserService, private router: Router, private _routeParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUsuario = this._routeParams.snapshot.params['id'];
    this.cargarUsuarioPorId(this.idUsuario);
  }
  cargarUsuarioPorId(id:number){
    this.servicio.obtenerUsuarioPorId(id).subscribe(
      data=>{
        this.idUsuario = data.id;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.direccion = data.direccion;
        this.password= data.password;
        this.email = data.correo;
      },
      error=>{
        alert("Error"+ error);
      }
    );
  }
  editarUsuario(){
    let user:User = new User();
    user.id = this.idUsuario;
    user.correo = this.email;
    user.direccion = this.direccion;
    user.password=this.password;
    user.nombre=this.nombre;
    user.apellido=this.apellido;

    this.servicio.editarUsuario(user).subscribe(
      data=>{
        alert("Editado");
        
      },
      error =>{
        alert("Error");
        console.log("Error", error);
      }
    );
  }
  logout(){
    localStorage.removeItem( "user" );
    this.router.navigate(['login']);
  }
}
