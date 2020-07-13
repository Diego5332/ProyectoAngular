import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/components/model/User'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-editar-usuarios',
  templateUrl: './admin-editar-usuarios.component.html',
  styleUrls: ['./admin-editar-usuarios.component.css']
})
export class AdminEditarUsuariosComponent implements OnInit {

  idUsuario:number;
  nombreUsuario:string;
  apellidoUsuario:string;
  email:string;
  password:string;
  direccion:string;



  constructor(private router: Router,
    private servicio: UserService, 
    private _routeParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUsuario = this._routeParams.snapshot.params['id'];
    this.cargarUsuarioPorId( this.idUsuario );
  }


  cargarUsuarioPorId( id:number ){
    this.servicio.obtenerUsuarioPorId( id ).subscribe( 
      data=>{
        this.idUsuario = data.id;
        this.nombreUsuario = data.nombre;
        this.apellidoUsuario=data.apellido;
        this.email=data.correo;
        this.direccion = data.direccion;
        this.password = data.password;
        
      }, 
      error=>{
        alert("Ocurrio un Error" + error);
      }
    );
  }


  editarUsuario(){

    let user:User  = new User();
    user.id = this.idUsuario;
    user.correo = this.email;
    user.nombre = this.nombreUsuario;
    user.password = this.password;
    user.apellido=this.apellidoUsuario;
    user.direccion=this.direccion;

    // Validacion 

    this.servicio.editarUsuario( user ).subscribe( 
      data =>{
        alert( "Usuario editado!" );
        this.router.navigateByUrl( "/privado/usuarios" );
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );

  }

}
