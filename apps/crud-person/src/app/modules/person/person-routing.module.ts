import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonFormComponent } from 'src/app/components/person/person-form/person-form.component';
import { PersonListComponent } from 'src/app/components/person/person-list/person-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: PersonListComponent },
    { path: 'create', component: PersonFormComponent },
    { path: 'edit/:id', component: PersonFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule { }
