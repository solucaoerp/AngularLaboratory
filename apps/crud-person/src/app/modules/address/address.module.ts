import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        AddressRoutingModule
    ]
})
export class AddressModule { }
