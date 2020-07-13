import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/components/model/User'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  idUsuario:number;
  nombreUsuario:string;
  apellidoUsuario:string;
  email:string;
  password:string;
  direccion:string;

  users:User[];
  
  constructor( 
    private servicio:UserService,
    private router: Router,
    private _routeParams: ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.servicio.obtenerUsuarios().subscribe(
      data =>{
        this.users = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }


  

 
  editarUsuario(){

    let user:User  = new User();
    user.id = this.idUsuario;
    user.correo = this.email;
    user.nombre = this.nombreUsuario;
    user.apellido=this.apellidoUsuario;
    user.password = this.password;
    user.direccion=this.direccion;

    // Validacion 

    this.servicio.editarUsuario( user ).subscribe( 
      data =>{
        alert( "Usuario editado!" );
        this.router.navigateByUrl( "/privado/admin" );
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );

  }


  eliminar(){}

}
