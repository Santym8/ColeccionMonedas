import { Component, Input, OnInit } from '@angular/core';
import { Moneda } from 'src/app/interfaces/moneda';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  listaMonedas: Moneda[];

  @Input() numeroColeecion: number;

  @Input() filtroEstado: number;

  @Input() busquedaAgno: string;

  monedasEncontradas: number;

  @Output() monedasEncontradasEvento = new EventEmitter<number>();







  constructor(public api: BaseDeDatosService) { }

  ngOnInit(): void {
    this.obtenerMonedas();




  }

  obtenerMonedas() {
    this.api.getMonedas().subscribe(
      (monedas) =>
        this.listaMonedas = monedas as Moneda[],
      () => alert("Error"),
    );
  }


  actualizaEstadoMoneda(moneda: Moneda) {
    moneda.encontrada = !moneda.encontrada;
    this.api.putMoneda(moneda.id, moneda).subscribe(
      () => this.obtenerMonedas(),
      () => alert("Error"))
  }




  contarMonedasEncontradas(coleccion: number) {

    if (this.listaMonedas != null) {
      let contador = 0;
      let moneda;
      for (let i = 0; i < this.listaMonedas.length; i++) {
        moneda = this.listaMonedas[i]
        if (moneda.coleccion == coleccion && moneda.encontrada == true) {
          contador++;
        }
      }
      this.monedasEncontradas = contador;   
    }
  }


  envairContadorMonedas(value: number) {
    this.contarMonedasEncontradas(this.numeroColeecion);
    if (value != null) {
      this.monedasEncontradasEvento.emit(value);
    }

  }








}
