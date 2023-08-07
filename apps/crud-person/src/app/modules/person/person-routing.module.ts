import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonFormComponent, PersonListComponent } from 'src/app/components';

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
