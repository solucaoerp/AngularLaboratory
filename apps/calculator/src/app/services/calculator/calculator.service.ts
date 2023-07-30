import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    constructor() { }

    calcular(operacao: string, numero1: number, numero2: number): number {
        switch (operacao) {
            case 'soma':
                return numero1 + numero2;
            case 'subtracao':
                return numero1 - numero2;
            case 'multiplicacao':
                return numero1 * numero2;
            case 'divisao':
                if (numero2 === 0) {
                    throw new Error('Não é possível dividir por zero');
                }
                return numero1 / numero2;
            default:
                throw new Error('Operação não suportada');
        }
    }
}
