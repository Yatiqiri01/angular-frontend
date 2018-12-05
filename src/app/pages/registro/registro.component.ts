import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../clases/user';
import {UtilServiceService} from '../../services/util-service.service';
import {Router} from "@angular/router";
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public usuario: User;
  public nombre: string;
  public apellidos: string;
  public edad: number;
  public tipo: string;
  public estado: string;
  public Paquete: string;
  public fechaPaquete: Date;
  public estadoPaquete:string;

  regForm: FormGroup;
  public mostrar: boolean;
  constructor(private formBuilder: FormBuilder,
              private utilService: UtilServiceService,
              private router: Router,
              private service: ServiciosService) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      edad:['', Validators.required],
      tipo:['', Validators.required],
      Paquete:['', Validators.required],
      fechaPaquete:['', Validators.required],
      estadoPaquete:['', Validators.required],
    });
  }

  onSubmit() {
    if(this.regForm.invalid) {
      alert('formulario invalido');
    } else {
      const obj = {
        tipo: this.tipo,
        nombre:this.nombre,
        apellidos: this.apellidos,
        edad: this.edad,
        estado:this.estado,
        Paquete:this.Paquete,
        fechaPaquete: this.fechaPaquete,
        estadoPaquete: this.estadoPaquete
        };  
      
        this.service.postGlobal<User>(obj, '/user/insert',null).subscribe(data => {
        this.usuario = data;
        window.localStorage.setItem('data', this.usuario.nombre);
        this.utilService.setData(this.usuario);
        window.alert('El usuario con id: ' + data._id + ' se ha registrado');
        this.router.navigate(['inicio']);
      },error=> {
        window.alert('Error al registrar usuario');
      });
    }
  }
  miFuncion() {
    // alert(this.nombre);
  }
  cambiarValor() {

    this.mostrar = !this.mostrar;

  }
}
