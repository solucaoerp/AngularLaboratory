import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumComponent } from './sum';
import { SumService } from './services';

@NgModule({
  declarations: [
    SumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SumComponent
  ],
  providers: [
    SumService
  ]
})
export class SumModule { }
