import { Injectable } from '@angular/core';

//creo mi objeto producto
export interface ObjetoProducto{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string   //el ultimo va sin puntoycomo;
}

//El decorador va antes de la clase
@Injectable({
  providedIn: 'root'
})
export class SrvProductos {

  //instancio mi objeto en una array para tener lista de productos:
  private listaProductos:ObjetoProducto[] = [
    {
      id: 1,
      nombre: 'Honda Transa LP',
      descripcion : 'Ideal para ciudad',
      precio: 6500,
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      nombre: 'Kawasaky 600',
      descripcion: 'Potente y elegante',
      precio: 9200,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      nombre: 'Kawasaky KX 250',
      descripcion: 'Moderna y económica',
      precio: 3900,
      imagen: '/img/kawasaky-kx250.jpg'
    },
   {
      id: 4,
      nombre: 'Suzuki 1200',
      descripcion: 'Moderna y económica',
      precio: 13900,
      imagen: '/img/suzuki-1200.jpg'
   }
  ]

  //este es mi constructor q ya venia:
  constructor() { }

  //metodo para optener mis productos le llamare getProductos y es publico no necesito poner public
  getProductos():ObjetoProducto[]{
    return this.listaProductos;
  }

}
