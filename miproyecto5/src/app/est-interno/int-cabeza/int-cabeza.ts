import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Autenticador } from '../../acceso/autenticador';

@Component({
  selector: 'app-int-cabeza',
  imports: [],
  templateUrl: './int-cabeza.html',
  styleUrl: './int-cabeza.css'
})
export class IntCabeza {
  //para cerrar session
  constructor(
    private identificador: Autenticador,
    private enrutador: Router
  ) { }

  logout() {
    this.identificador.logout();
    this.enrutador.navigate(['/inicio']);
  }

}
