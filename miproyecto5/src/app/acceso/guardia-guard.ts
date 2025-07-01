import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
//importo mi servicio de autenticacion
import { Autenticador } from './autenticador';

export const guardiaGuard: CanActivateFn = (route, state) => {
  const enrutador = inject(Router);
  //ahora llamo a mi variable desde el servicio Autenticador
  //const estaAutenticado = false;
  const identificador = inject(Autenticador);

  if (!identificador.estaAutenticado()) {
    enrutador.navigate(['/inicio']);
    return false;
  }
  return true;
};
