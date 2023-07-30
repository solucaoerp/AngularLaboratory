import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from 'src/app/components/calculator/calculator.component';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@NgModule({
    declarations: [CalculatorComponent],
    imports: [CommonModule, FormsModule],
    exports: [CalculatorComponent],
    providers: [CalculatorService]
})
export class CalculatorModule { }
