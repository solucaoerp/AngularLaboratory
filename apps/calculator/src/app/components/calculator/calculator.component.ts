import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    private resultado: number | string = 0;

    constructor(private calculatorService: CalculatorService) { }

    ngOnInit(): void {
    }

    calcular(operacao: string, numero1: string, numero2: string): void {
        let n1 = parseFloat(numero1);
        let n2 = parseFloat(numero2);

        try {
            this.resultado = this.calculatorService.calcular(operacao, n1, n2);
        } catch (error) {
            if (error instanceof Error) {
                this.resultado = error.message;
            } else {
                this.resultado = 'Ocorreu um erro desconhecido.';
            }
        }
    }

    get resultShow(): string {
        return this.resultado.toString();
    }
}
