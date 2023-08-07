import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AddressFormComponent, AddressListComponent } from 'src/app/components';
import { AddressRoutingModule } from './address-routing.module';

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
