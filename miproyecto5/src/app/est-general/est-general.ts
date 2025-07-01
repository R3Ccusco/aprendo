import { Component } from '@angular/core';
// importo RouterOutlet → para que las rutas hijas funcionen.
import { RouterOutlet } from '@angular/router';
// importa cabeza y pie generales = publicos
import { GnrCabeza } from './gnr-cabeza/gnr-cabeza';
import { GnrPie } from './gnr-pie/gnr-pie';

@Component({
  selector: 'app-est-general',
  imports: [RouterOutlet, GnrCabeza, GnrPie],
  templateUrl: './est-general.html',
  styleUrl: './est-general.css'
})
export class EstGeneral {
  // variable usada para autenticar
  autenticado: boolean = sessionStorage.getItem('logueado') === 'true';
  // sessionStorage = variable de session
}
