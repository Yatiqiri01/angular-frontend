import { Component, OnInit, OnChanges } from '@angular/core';
import {ServiciosService} from '../../services/servicios.service';
import {Usuario} from '../../clases/usuario';
import {UtilServiceService} from '../../services/util-service.service';
import {User} from '../../clases/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  public txtUsujario: string;
  public fecha: Date = new Date();
  public moneda: Number = 123;
  public usuarios: Array<Usuario>;
  public usuarios2: User;
  constructor(private service: ServiciosService, private utilService: UtilServiceService) {
    this.usuarios2 = utilService.getData<User>();
    const token = window.localStorage.getItem('data');
    this.llamarServicio();
    console.log('************************');
    console.log(token);
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
      window.alert('Nombre: ' + data.nombre + ' Apellido: ' + data.apellidos);
    }, error=> {
      window.alert('Error al encontrar usuario');
    });
  }

}
