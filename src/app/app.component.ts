import { Router } from '@angular/router';
import { Usuario } from './clases/usuario';
import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = 'angular';
  public usuarios: any;
  constructor(private router: Router) {

  }
  setTitulo(nombre: String) {
    if (true) {
      console.log('true');
    }
    for(let i=0; i<10;i++) {

    }
  }
  goToHome() {
    this.router.navigate(['inicio']);
  }
  goToRegistro() {
    this.router.navigate(['']);
  }
  goToEliminar() {
    this.router.navigate(['eliminar']);
  }
  goToActualizar() {
    this.router.navigate(['actualizar']);
  }
}
