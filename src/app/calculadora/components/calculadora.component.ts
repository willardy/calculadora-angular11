import { Component, OnInit } from '@angular/core';
import {CalculadoraService} from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string = '0';
  private numero2: string = 'null';
  private resultado: number = 0;
  private operacao: string = 'null';

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  adicionarNumero(numero: string): void {
    if(this.operacao === 'null'){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }else{
      this.numero2 = this.concatenarNumero(this.numero2, numero)
    }
  }

  definirOperacao(operacao: string): void {

    if(this.operacao === 'null'){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 !== 'null'){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      )

      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = 'null';
      this.resultado = 0;
    }

  }

  calcular() {



    if(this.numero2 === 'null'){
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);

    console.log(this.numero1)
    console.log(this.numero2)
    console.log(this.resultado)
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = 'null';
    this.resultado = 0;
    this.operacao = 'null';
  }

  concatenarNumero(numAtual: string, numConcatenado: string): string{

    if(numAtual === '0' || numAtual === 'null'){
      numAtual = '';
    }

    if(numConcatenado === '.' && numAtual === ''){
      return '0.';
    }

    if(numConcatenado === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcatenado;
  }

  get display(): string{
    if(this.resultado !== 0){
      return this.resultado.toString();
    }

    if(this.numero2 !== 'null'){
      return this.numero2;
    }

    return this.numero1;
  }
}
