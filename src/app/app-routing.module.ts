import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ErrorComponent} from './pages/error/error.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistroComponent} from './pages/registro/registro.component';
import { ListarComponent } from './pages/listar/listar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import {EliminarComponent} from './pages/eliminar/eliminar.component'

const routes: Routes = [
  {path: 'inicio', component: HomeComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'login', component: LoginComponent },
  {path: '', component: InicioComponent },
  {path: 'lista', component: ListarComponent },
  {path: 'actualizar',component: ActualizarComponent},
  {path:'registro', component: RegistroComponent},
  {path:'eliminar', component: EliminarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
