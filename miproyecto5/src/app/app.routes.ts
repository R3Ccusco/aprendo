import { Routes } from '@angular/router';
//importo estructura general = publico
import { EstGeneral } from './est-general/est-general';
//importo estructura interna = privado
import { EstInterno } from './est-interno/est-interno';
//importo Guardia para protejer lo privado
import { guardiaGuard } from './acceso/guardia-guard';

export const routes: Routes = [

    // Sección pública = general
    {
        path: '', //Cuando el path (URL) es vacío (''), se usa el componente Espublica
        component: EstGeneral,
        children: [
            {
                //pathMatch: 'full' significa que solo redirige si la URL completa coincide con ''.
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            },
            {
                //Cuando el usuario navega a /inicio ; recien se carga el componente = lazy load
                path: 'inicio',
                loadComponent: () =>
                    import('./general/inicio/inicio').then(m => m.Inicio),
            },
            {
                //Cuando el usuario navega a /nosotros ; recien se carga el componente = lazy load
                path: 'nosotros',
                loadComponent: () =>
                    import('./general/nosotros/nosotros').then(m => m.Nosotros),
            },
            {
                //Cuando el usuario navega a /servicios ; recien se carga el componente = lazy load
                path: 'servicios',
                loadComponent: () =>
                    import('./general/servicios/servicios').then(m => m.Servicios),
            },
        ]
    },

    // credenciales de ingreso login
    {
        path: 'login',
        loadComponent: () =>
            import('./acceso/login/login').then(m => m.Login),
    },

    // Sección interna = privado
    {
        path: 'privado', //Si la URL comienza con /privado, se muestra el componente Esprivada
        component: EstInterno,
        canActivate: [guardiaGuard],  //aqui restringo solo autenticados
        children: [
            {
                //Si alguien entra solo a /privado, será redirigido a /privado/inicio.
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                //Al acceder a /privado/inicio, se carga el componente Inicio de la sección privada.
                path: 'dashboard',
                loadComponent: () =>
                    import('./interno/dashboard/dashboard').then(m => m.Dashboard),
            },
        ]
    },

    // Ruta 404
    //Si el usuario entra a una URL no reconocida (cualquier cosa), será redirigido a /inicio.
    {
        path: '**',
        redirectTo: 'inicio'
    }

];
