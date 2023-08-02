import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PersonService } from 'src/app/services/person/person.service';
import { PersonListComponent } from 'src/app/components/person/person-list/person-list.component';
import { PersonCreateComponent } from 'src/app/components/person/person-create/person-create.component';
import { PersonEditComponent } from 'src/app/components/person/person-edit/person-edit.component';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonCreateComponent,
    PersonEditComponent
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
