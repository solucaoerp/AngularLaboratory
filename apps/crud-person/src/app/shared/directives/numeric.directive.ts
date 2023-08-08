import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numericDirective]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumericDirective,
    multi: true
  }]
})
export class NumericDirective implements ControlValueAccessor {
  onChange: any;
  onTouched: any;

  constructor(private elementRef: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    valor = valor.replace(/[\D]/g, ''); // expressão regular: remove tudo que não é número
    $event.target.value = valor;

    this.onChange(valor);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.elementRef.nativeElement.value = obj;
  }

  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }
}
