import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/privado/prueba/prueba.component';
import { InicioComponent } from './components/publico/inicio/inicio.component';
import { AgregarProductoComponent } from './components/privado/agregar-producto/agregar-producto.component';
import { RegistroComponent } from './components/publico/registro/registro.component';
import { LoginComponent } from './components/publico/login/login.component';
import { MisProductosComponent } from './components/privado/mis-productos/mis-productos.component';
import { PerfilComponent } from './components/privado/perfil/perfil.component';
import { BuscarComponent } from './components/privado/buscar/buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Buscar2Component } from './components/buscar2/buscar2.component';
import { PantallaProductoComponent } from './components/privado/pantalla-producto/pantalla-producto.component';
import { UsuarioLogeadoComponent } from './components/privado/iniciolog/usuario-logeado.component';
import { AdminComponent } from './components/privado/admin/admin.component';
import { AdminEditarUsuariosComponent } from './components/privado/admin-editar-usuarios/admin-editar-usuarios.component';
import { VentanaAdminComponent } from './components/privado/ventana-admin/ventana-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    InicioComponent,
    AgregarProductoComponent,
    RegistroComponent,
    LoginComponent,
    MisProductosComponent,
    PerfilComponent,
    BuscarComponent,
    Buscar2Component,
    PantallaProductoComponent,
    UsuarioLogeadoComponent,
    AdminComponent,
    AdminEditarUsuariosComponent,
    VentanaAdminComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
