import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';

import { CityFormComponent, CityListComponent } from 'src/app/components';
import { CityRoutingModule } from './city-routing.module';

@NgModule({
    declarations: [
        CityListComponent,
        CityFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CityRoutingModule,
        NgSelectModule
    ]
})
export class CityModule { }
