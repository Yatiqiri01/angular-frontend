import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Usuario } from '../../clases/usuario';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
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

  public actualizarUsuario(user: Usuario) {
    this.service.putGlobal<Usuario>(user, '/user/update/',user.nombre, null).subscribe(data => {
      console.log(data);
      //window.alert('Nombre: ' + data.nombre + ' Apellidos: ' + data.apellidos);
    }, error=> {
      window.alert('Error al encontrar usuario');
    });
  }

}
