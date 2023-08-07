import { Directive, Input, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[minValidatorDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinValidatorDirective,
    multi: true
  }]
})
export class MinValidatorDirective implements Validator, OnInit {

  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

  validate(formControl: FormControl) {
    let v: number = +formControl.value;
    if (isNaN(v)) {
      return { 'minimo': true, 'requiredValue': 18 }
    }
    if (v < +this.valorMinimo) {
      return { 'minimo': true, 'requiredValue': 18 }
    }
    return null;
  }

  //  registerOnValidatorChange?(fn: () => void): void {
  //    throw new Error('Method not implemented.');
  //  }
}
