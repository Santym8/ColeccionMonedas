import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moneda } from '../interfaces/moneda';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  private root = "http://127.0.0.1:8000/"


  constructor(public http: HttpClient) { }



  //------------------Todas las monedas Monedas-----------------

  getMonedas(){
    return this.http.get(this.root.concat('monedas/'))
  }

  //-----------------Actualizar estado de moneda----------

  putMoneda(pk:number, moneda:Moneda){
    return this.http.put(this.root.concat('moneda/'+pk), moneda)
  }

  //--------------Nombre Colecciones -----------------------


  getColecciones(){
    return this.http.get(this.root.concat('colecciones/'))
  }


  getColeccion(pk:number){
    return this.http.get(this.root.concat('coleccion/'+pk))
  }

}
