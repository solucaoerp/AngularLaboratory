import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressFormComponent } from 'src/app/components/address/address-form/address-form.component';
import { AddressListComponent } from 'src/app/components/address/address-list/address-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: AddressListComponent },
    { path: 'create', component: AddressFormComponent },
    { path: 'edit/:id', component: AddressFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddressRoutingModule { }
