import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared';

import { PersonFormComponent, PersonListComponent } from 'src/app/components';
import { PersonService } from 'src/app/services';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    SharedModule
  ],
  providers: [
    PersonService,
    DatePipe
  ]
})
export class PersonModule { }