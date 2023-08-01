import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonModule } from './modules/person/person.module';
import { PersonListComponent } from './components/person/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
