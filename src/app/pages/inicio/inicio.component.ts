import { Router } from '@angular/router';
import { SheetComponent } from './sheet/sheet.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet,
    private router: Router) { }

  ngOnInit() {
  }
  openBottomSheet(): void {
    this.bottomSheet.open(SheetComponent);
  }
  goToRegistro() {

    this.router.navigate(['registro']);
  }
  goToListar() {

    this.router.navigate(['lista']);
  }
}

