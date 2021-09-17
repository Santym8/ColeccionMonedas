import { Pipe, PipeTransform } from '@angular/core';
import { Moneda } from '../interfaces/moneda';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: Moneda[], estado:number): Moneda[] {
    if(estado == -1) return value
    else if (estado == 0) return value.filter(moneda => moneda.encontrada == false)
    else return value.filter(moneda => moneda.encontrada == true)
  }

}
