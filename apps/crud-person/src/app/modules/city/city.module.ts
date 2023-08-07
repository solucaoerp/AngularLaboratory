import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
