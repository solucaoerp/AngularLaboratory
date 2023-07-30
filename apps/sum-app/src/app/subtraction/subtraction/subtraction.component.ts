import { Component, OnInit } from '@angular/core';
import { SubtractionService } from '../services';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
  private resultado: number = 0;

  constructor(private serviceSubtraction: SubtractionService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Argumentos em string, porque vem da tela 'form'
  subtracao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.resultado = this.serviceSubtraction.subtracao(n1, n2);
  }

  // Mostra, devolve o resultado guardado na variavel 'resultado' e processada no método 'somar()'
  get resultSubtractionShow(): string {
    return this.resultado.toString();
  }
}