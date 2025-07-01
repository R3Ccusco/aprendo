import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticador } from '../autenticador';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  credenciales;

  constructor(
    private autenticador: Autenticador,
    private enrutador: Router,
    private formulario: FormBuilder
  ) {
    this.credenciales = this.formulario.group({
      usuario: '',
      contrasena: ''
    });
  }

  login() {
    const { usuario, contrasena } = this.credenciales.value;
    console.log('usuario = ', usuario);
    console.log('contraseña = ', contrasena);

    this.autenticador.login(); //ejecuto funcion login de mi autenticador
    this.enrutador.navigate(['/privado']);
  }

  logout() {
    this.autenticador.logout(); //ejecuto funcion logout de mi autenticador
    this.enrutador.navigate(['/inicio']);
  }

  estaAutenticado(): boolean {
    return this.autenticador.estaAutenticado();
  }

}
