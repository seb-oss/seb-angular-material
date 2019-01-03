import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatNativeDateModule,

  ]
})
export class MaterialModule { }
