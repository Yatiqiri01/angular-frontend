import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnChanges {
  public usuarios: Array<Usuario>;
  constructor(private service: ServiciosService) {
    this.llamarServicio();
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }

  public llamarServicio() {
    this.service
      .getGlobal<Array<Usuario>>('/user/all',null)
      .subscribe(data => {
        this.usuarios = data;
        console.log(this.usuarios);
    }, error => {
        alert('Error');
      });
  }

  public mostrarUsuario(user: Usuario) {
    this.service.getGlobal<Usuario>('/user/' + user.nombre,null).subscribe(data => {
      console.log(data);
      window.alert('Nombre: ' + data.nombre + ' Apellidos: ' + data.apellidos);
    }, error=> {
      window.alert('Error al encontrar usuario');
    });
  }

}
