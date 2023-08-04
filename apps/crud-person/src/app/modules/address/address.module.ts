import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AddressRoutingModule } from './address-routing.module';
import { AddressListComponent } from 'src/app/components/address/address-list/address-list.component';
import { AddressFormComponent } from 'src/app/components/address/address-form/address-form.component';

@NgModule({
    declarations: [
        AddressListComponent,
        AddressFormComponent
    ],
    imports: [
        CommonModule,
        AddressRoutingModule,
        RouterModule,
        FormsModule
    ]
})
export class AddressModule { }
