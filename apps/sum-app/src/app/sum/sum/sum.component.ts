import { Component, OnInit } from '@angular/core';
import { SumService } from '../services';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
  private resultado: number = 0;

  constructor(private sumService: SumService) { }

  ngOnInit(): void {
  }

  // Argumentos em string, porque vem da tela 'form'
  somar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.resultado = this.sumService.somar(n1, n2);
  }

  // Mostra, devolve o resultado guardado na variavel 'resultado' e processada no método 'somar()'
  get resultSomaShow(): string {
    return this.resultado.toString();
  }

}