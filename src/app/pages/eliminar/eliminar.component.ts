import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {
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

  public eliminarUsuario(user: Usuario) {
    this.service.deleteGlobal<Usuario>(user.nombre, '/user/delete/',null).subscribe(data => {
      console.log(data);
      //window.alert('Nombre: ' + data.nombre + ' Apellidos: ' + data.apellidos);
    }, error=> {
      window.alert('Error al encontrar usuario');
    });
  }

}
