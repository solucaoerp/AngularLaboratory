import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'persons/list', pathMatch: 'full' },
  { path: 'persons', redirectTo: 'persons/list' },
  { path: 'persons/list', component: PersonListComponent },
  { path: 'persons/create', component: PersonCreateComponent },
  { path: 'persons/edit/:id', component: PersonEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
