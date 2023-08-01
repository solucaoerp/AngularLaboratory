import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person/person-list/person-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'persons/list', pathMatch: 'full' },
  { path: 'persons', redirectTo: 'persons/list' },
  { path: 'persons/list', component: PersonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
