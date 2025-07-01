import { Component } from '@angular/core';
// importo RouterOutlet → para que las rutas hijas funcionen.
import { RouterOutlet } from '@angular/router';
// importa cabeza y pie internos = privados
import { IntCabeza } from './int-cabeza/int-cabeza';
import { IntPie } from './int-pie/int-pie';

@Component({
  selector: 'app-est-interno',
  imports: [RouterOutlet, IntCabeza, IntPie],
  templateUrl: './est-interno.html',
  styleUrl: './est-interno.css'
})
export class EstInterno {

}
