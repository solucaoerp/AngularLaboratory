import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonFormComponent } from './components/person/person-form/person-form.component';

const routes: Routes = [
  {
    path: 'persons',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PersonListComponent },
      { path: 'create', component: PersonFormComponent },
      { path: 'edit/:id', component: PersonFormComponent }
    ]
  },
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
