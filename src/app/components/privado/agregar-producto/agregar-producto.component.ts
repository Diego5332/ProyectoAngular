import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../../model/Producto';
import { User } from '../../model/User';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
user:User;
nombre:string;
tipo:string = "-1";
marca:string;
condicion:string = "-1";
descripcion:string;
  constructor(
    private servicio: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  logout(){
    localStorage.removeItem( "user" );
    this.router.navigate(['Home']);
  }
  crearProducto(){
    let producto:Producto = new Producto();
    producto.nombre = this.nombre;
    producto.tipo = this.tipo;
    producto.marca = this.marca;
    producto.descripcion = this.descripcion;
    producto.condicion = this.condicion;
    producto.estado = "disponible";
    producto.usuarioId = this.user.id;

    this.servicio.crearProducto(producto).subscribe(
      data=>{
        alert("Producto registrado");
        this.router.navigateByUrl( "/privado/mis-productos")
      },
      error=>{
        alert("Error");
        console.log("Error",error);
      }
    );
  }
}
