import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumModule } from './sum/sum.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
