import { Component, OnInit } from '@angular/core';
import { Coleccion } from 'src/app/interfaces/coleccion';
import { Moneda } from 'src/app/interfaces/moneda';
import { BaseDeDatosService } from 'src/app/servicios/base-de-datos.service';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {

  numeroColeecion: number;
  busquedaAgno:string;
  filtroEstado:number;

  colecciones: Coleccion[];
  coleccionActual:Coleccion;
 
  monedasEncontradas:number;

 

  constructor(private api: BaseDeDatosService) {
    this.obtenerDatosColeccion(1)

   }

  ngOnInit(): void {
    this.numeroColeecion = 1;
    this.busquedaAgno = "" ;
    this.filtroEstado = -1;
    
    this.obtenerDatosColeciones();
   
  }



  obtenerDatosColeciones() {
    this.api.getColecciones().subscribe(
      (colecciones) => this.colecciones = colecciones as Coleccion[],
      () => alert("Error")
    )
  }

  obtenerDatosColeccion(id:number){
    this.api.getColeccion(id).subscribe(
      (colecion)=> this.coleccionActual = colecion as Coleccion,
      ()=>alert("Error")
    )

  }


  cambiarNumeroColecion(coleccion:Coleccion){
    this.numeroColeecion = coleccion.id;
    this.obtenerDatosColeccion(coleccion.id)
    
  }

  cambiarFiltroEstado(num:number){
    this.filtroEstado = num;
  }



  cambiarMonedasEncontradas(nuevaCantidad: number) {
    this.monedasEncontradas=nuevaCantidad;
  }


}
