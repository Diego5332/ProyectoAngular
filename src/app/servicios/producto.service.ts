import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../components/model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  obtenerProductos(){
    return this.http.get<Producto[]>("http://localhost:3000/productos");
  }
  obtenerProductoPorId(id:number){
    return this.http.get<Producto>("http://localhost:3000/productos/"+id);
  }
  crearProducto(producto:Producto){
    return this.http.post("http://localhost:3000/productos", producto);
  }
  editarProducto(producto:Producto){
    return this.http.put("http://localhost:3000/productos/"+producto.id, producto);
  }
}
