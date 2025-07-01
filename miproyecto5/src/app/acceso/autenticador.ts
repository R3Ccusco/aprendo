import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Autenticador {
  private estaLogueado = false;

  constructor() { }

  estaAutenticado(): boolean {
    //leo el valor de una variable de session q seria logueado q prodria ser true o null
    this.estaLogueado = sessionStorage.getItem('logueado') === 'true';
    return this.estaLogueado;
  }

  login() {
    sessionStorage.setItem('logueado', 'true');
  }

  logout() {
    sessionStorage.removeItem('logueado');
  }
  
}

/**
 * entonces la variable de session o existe o se elimina = null
 * por eso debo de comprar su existencia
 * para recien darle true o false
 * a mi this.estaLogueado
 */
