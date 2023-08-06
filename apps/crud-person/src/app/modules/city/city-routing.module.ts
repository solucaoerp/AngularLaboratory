import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityFormComponent } from 'src/app/components/city/city-form/city-form.component';
import { CityListComponent } from 'src/app/components/city/city-list/city-list.component';

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
