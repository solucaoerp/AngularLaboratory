import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddressListComponent } from './components/address/address-list/address-list.component';
import { AddressFormComponent } from './components/address/address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
