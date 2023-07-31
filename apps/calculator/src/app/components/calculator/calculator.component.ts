import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    private resultado: number | string = 0;

    constructor(private calculatorService: CalculatorService) { }

    calcular(operacao: string, numero1: HTMLInputElement, numero2: HTMLInputElement): void {
        const n1 = numero1.value;
        const n2 = numero2.value;

        if (isNaN(parseFloat(n1)) || isNaN(parseFloat(n2))) {
            this.resultado = 'Os valores inseridos devem ser numéricos';
            numero1.style.borderColor = 'red';
            numero2.style.borderColor = 'red';
        } else {
            numero1.style.borderColor = 'initial';
            numero2.style.borderColor = 'initial';
            try {
                this.resultado = this.calculatorService.calcular(operacao, parseFloat(n1), parseFloat(n2));
            } catch (error) {
                if (error instanceof Error) {
                    this.resultado = error.message;
                } else {
                    this.resultado = 'Ocorreu um erro desconhecido.';
                }
            }
        }
    }

    get resultShow(): string {
        return this.resultado.toString();
    }
}
