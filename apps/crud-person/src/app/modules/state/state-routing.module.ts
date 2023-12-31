import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StateFormComponent, StateListComponent } from 'src/app/components';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: StateListComponent },
    { path: 'create', component: StateFormComponent },
    { path: 'edit/:id', component: StateFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StateRoutingModule { }
