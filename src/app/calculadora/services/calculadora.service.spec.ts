import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import {inject} from "@angular/core";

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CalculadoraService]});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Deve garantir que 1+4 = 5', () =>{
    let soma = service.calcular(1,4,CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('Deve garantir que 4-3 = 1', () =>{
    let soma = service.calcular(4,3,CalculadoraService.SUBTRACAO);
    expect(soma).toEqual(1);
  });

  it('Deve garantir que 4*3 = 12', () =>{
    let soma = service.calcular(4,3,CalculadoraService.MULTIPLICACAO);
    expect(soma).toEqual(12);
  });

  it('Deve garantir que 4/2 = 2', () =>{
    let soma = service.calcular(4,2,CalculadoraService.DIVISAO);
    expect(soma).toEqual(2);
  });

  it('Deve garantir que um operador inválido retorne 0', () =>{
    let soma = service.calcular(5,3,'%');
    expect(soma).toEqual(0);
  });

});
