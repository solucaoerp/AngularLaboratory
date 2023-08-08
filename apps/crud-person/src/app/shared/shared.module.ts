import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DatesDirective } from './directives/dates.directive';
import { MinValidatorDirective } from './directives/min-validator.directive';
import { NumericDirective } from './directives/numeric.directive';
import { DatesPipe } from './pipes/dates.pipe';
import { FormatsPipe } from './pipes/formats.pipe';

@NgModule({
    declarations: [
        DatesDirective,
        MinValidatorDirective,
        NumericDirective,
        DatesPipe,
        FormatsPipe,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DatesDirective,
        MinValidatorDirective,
        NumericDirective,
        DatesPipe,
        FormatsPipe
    ]
})
export class SharedModule { }
