import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumModule } from './sum';
import { SubtractionModule } from './subtraction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SumModule,
    SubtractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
