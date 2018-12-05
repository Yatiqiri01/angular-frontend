import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {

  constructor(private router: Router,
    private bottomSheetRef: MatBottomSheetRef<SheetComponent>) { }
  goToRegistro() {
    this.bottomSheetRef.dismiss();
    this.router.navigate(['registro']);
  }
  goToListar() {
    this.bottomSheetRef.dismiss();
    this.router.navigate(['lista']);
  }

}
