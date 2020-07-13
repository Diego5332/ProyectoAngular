import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
nombre:string;
password:string;

  constructor(private router: Router, private servicio: UserService) { }

  ngOnInit(): void {
  }
iniciarSesion(){
  this.servicio.login(this.nombre, this.password).subscribe(
    data=>{
      if(data.length !=0){
        alert("logeado");
        localStorage.setItem("user", JSON.stringify(data[0]))
        this.router.navigateByUrl("/privado/inicio");
      }else{
        alert("error");
      }
    },
    error=>{
      alert("error");
      console.log("error", error);
    }

  )
}
}
