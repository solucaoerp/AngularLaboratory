import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
        CityRoutingModule
    ]
})
export class CityModule { }
