import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityFormComponent, CityListComponent } from 'src/app/components';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: CityListComponent },
    { path: 'create', component: CityFormComponent },
    { path: 'edit/:id', component: CityFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CityRoutingModule { }
