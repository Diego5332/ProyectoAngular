import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  obtenerUsuarios(){
    return this.http.get<User[]>("http://localhost:3000/usuarios");
  }
  obtenerUsuarioPorId(id:number){
    return this.http.get<User>("http://localhost:3000/usuarios/"+id);
  }
  crearUsuario(user:User){
    return this.http.post("http://localhost:3000/usuarios", user);
  }
  editarUsuario(user:User){
    return this.http.put("http://localhost:3000/usuarios/"+user.id, user);
  }
  login(nombre:string,password:string){
    return this.http.get<User[]>("http://localhost:3000/usuarios?nombre="+nombre+"&&password="+password);
  }
}
