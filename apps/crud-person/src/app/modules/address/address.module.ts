import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';

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
        FormsModule,
        NgSelectModule
    ]
})
export class AddressModule { }
