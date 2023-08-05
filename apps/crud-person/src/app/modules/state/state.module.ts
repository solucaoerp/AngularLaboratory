import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StateRoutingModule } from './state-routing.module';
import { StateListComponent } from 'src/app/components/state/state-list/state-list.component';
import { StateFormComponent } from 'src/app/components/state/state-form/state-form.component';

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
