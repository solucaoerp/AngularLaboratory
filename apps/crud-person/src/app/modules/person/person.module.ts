import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PersonService } from 'src/app/services/person/person.service';
import { PersonListComponent } from 'src/app/components/person/person-list/person-list.component';
import { PersonFormComponent } from 'src/app/components/person/person-form/person-form.component';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }