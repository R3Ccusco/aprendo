import { Component } from '@angular/core';
//importo mi servicio/srv-productos.ts de manera q se importa tanto mi objeto y mi servicio
import { ObjetoProducto, SrvProductos } from '../../servicio/srv-productos';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros {
  //declaro una nueva lista de productos vacia de tipo ObjetoProducto
  lstProductos : ObjetoProducto[] = [];
  //ahora si la inyeccion de dependencias
  //voy a instanciar a SrvProductos
  constructor(private servicioProductos : SrvProductos){
    //lleno mi lista
    this.lstProductos = this.servicioProductos.getProductos();
  }
}
