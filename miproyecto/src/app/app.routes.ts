import { Routes } from '@angular/router';
import { Nosotros } from './publico/nosotros/nosotros';

export const routes: Routes = [
    /**
     * primera ruta, path es la url
     * component = nombre del componente
     * y lo ubico en el archivo.ts del componete
     * ejemplo en src/app/publico/nosotros/nosotros.ts
     * dentro de ese componente en la linea 9 dice:
     * export class Nosotros {
     * entonces el nombre de mi componente es ese = Nosotros
     * y automaticamente aqui se importa el componente:   (usa mi complemento Angular Languajes Service q le agregue a VScode)
     * import { Nosotros } from './publico/nosotros/nosotros';
     */
    {path: '', component: Nosotros},
    //determino otro componete
    //como la ruta 404 lo redirecciono a la ruta raiz = ''
    {path: '**', redirectTo: ''}
    //no olvides q cada ruta q separa con COMA ,
];
