
import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule, MatBottomSheetModule, MatListModule, MatDatepickerModule, } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatDatepickerModule,
    
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatDatepickerModule,
  ]
})

export class MaterialComponent { }
