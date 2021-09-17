import { Pipe, PipeTransform } from '@angular/core';
import { Moneda } from '../interfaces/moneda';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: Moneda[], busqueda: string): Moneda[] {
    if (busqueda == "" ) return value
    else {
      return value.filter(moneda => (moneda.agno + "").includes(busqueda))
    }
  }

}
