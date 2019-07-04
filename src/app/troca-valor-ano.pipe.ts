import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trocaValorAno'
})
export class TrocaValorAnoPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    if(value > 2000) {
      return 'Após anos 2000';
    }
    if (value < 2000) {
      return  'Antes dos anos 2000';
    }
    return 'Anos 2000';
  }

}
