import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { SubtractionService } from './services';

@NgModule({
  declarations: [
    SubtractionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubtractionComponent
  ],
  providers: [
    SubtractionService
  ]
})
export class SubtractionModule { }
