import { Pipe, PipeTransform } from '@angular/core';
import { Moneda } from '../interfaces/moneda';

@Pipe({
  name: 'coleccion'
})
export class ColeccionPipe implements PipeTransform {

  transform(value: Moneda[], coleecion: number): Moneda[] {

    if (!value) return [];
   
    return value.filter(moneda => moneda.coleccion == coleecion)

  }

}
