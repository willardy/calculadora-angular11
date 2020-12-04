import { Component, OnInit } from '@angular/core';
import {CalculadoraService} from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  display: any;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  adicionarNumero(s: string) {

  }

  // tslint:disable-next-line:typedef
  definirOperacao(s: string) {

  }

  // tslint:disable-next-line:typedef
  calcular() {

  }

  // tslint:disable-next-line:typedef
  limpar() {

  }
}
