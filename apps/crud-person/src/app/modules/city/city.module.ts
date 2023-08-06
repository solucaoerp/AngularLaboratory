import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CityRoutingModule } from './city-routing.module';
import { CityListComponent } from 'src/app/components/city/city-list/city-list.component';
import { CityFormComponent } from 'src/app/components/city/city-form/city-form.component';

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
