import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StateFormComponent, StateListComponent } from 'src/app/components';
import { StateRoutingModule } from './state-routing.module';

@NgModule({
    declarations: [
        StateListComponent,
        StateFormComponent
    ],
    imports: [
        CommonModule,
        StateRoutingModule,
        RouterModule,
        FormsModule
    ]
})
export class StateModule { }
