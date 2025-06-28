import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabeza } from './principal/cabeza/cabeza';
import { Pie } from './principal/pie/pie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabeza, Pie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'miproyecto';
}
