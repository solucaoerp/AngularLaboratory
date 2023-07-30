import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumComponent } from './sum';

@NgModule({
  declarations: [
    SumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SumComponent
  ]
})
export class SumModule { }
