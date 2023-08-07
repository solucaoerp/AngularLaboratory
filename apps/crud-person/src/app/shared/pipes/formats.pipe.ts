import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatsPipe'
})
export class FormatsPipe implements PipeTransform {

  transform(value: unknown, method: string = '', ...args: unknown[]): unknown {
    switch (method) {
      case 'toUpperCase':
        return this.strToUpper(value as string);
      // Você pode adicionar mais cases aqui para outras transformações
      default:
        return value;
    }
  }

  private strToUpper(value: string | undefined): string {
    if (value) {
      return value.toUpperCase();
    }
    else {
      return "";
    }
  }
}
