import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialComponent} from './material.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import {ServiciosService} from './services/servicios.service';
import { RegistroComponent } from './pages/registro/registro.component';
import {UtilServiceService} from './services/util-service.service';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { SheetComponent } from './pages/inicio/sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    InicioComponent,
    ActualizarComponent,
    ListarComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiciosService,
    UtilServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
