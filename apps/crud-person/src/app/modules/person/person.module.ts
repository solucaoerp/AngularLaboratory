import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared';

import { PersonFormComponent, PersonListComponent } from 'src/app/components';
import { PersonRoutingModule } from './person-routing.module';
import { PersonService } from 'src/app/services';

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