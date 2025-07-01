<hr>
    <div align="center">
        <a href="https://github.com/R3Ccusco"
            target="_blank">
            <img src="https://github.com/R3Ccusco/r3c/blob/main/logoreccusco.svg" width="400">
        </a>
    </div>

<hr>
    <p>aprendo componentes y servicios</p>
	https://www.youtube.com/watch?v=wkD8RQr9Evw

<hr>
    <div align="center">
        <a href="https://angular.dev/"
            target="_blank">
            <img src="https://github.com/R3Ccusco/r3c/blob/main/logoangular.svg" width="400">
        </a>
    </div>

<h5>Instalacion Global de Angular:</h5>

```
npm install -g @angular/cli@latest
```

<h5>actualizar npm:</h5>

```
npm install -g npm
```

<h5>Creo mi proyecto:</h5>

```
ng new miproyecto5
```

me pregunta:
¿Quieres crear una aplicación sin zone.js?
zone.js Detecta cambio en nuestras interfaces

le pone NO

Me pregunta:
trabajar con css o less o sass

Me pregunta:
SSR = sitios estaticos prerenderizados
del lado del servidor
Si tu objetivo es aprender, desarrollar una SPA,
o trabajar en el frontend, no necesitas SSR.

le pone NO

<hr>

<h3>OJO dentro del proyecto abro git bash</h3>

<h5> Instalo Bootstrap CSS & JS</h5>

```
npm install bootstrap
npm install bootstrap @popperjs/core
npm install bootstrap-icons
```

Abre el archivo angular.json
y en la sección "styles" agrega

```
"styles": [
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

<h5>Instala el paquete de animaciones de Angular</h5>

```
npm install @angular/animations
```

Abre el archivo app.config.ts

```
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//agrego animacion de angular
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //proveo animacion de angular
    provideAnimations()
  ]
};
```

<h5>Correr el servidor local </h5>

```
ng serve -o
```

el -o abrira el navegador



<hr>
<h1 align="center">
Sistemas de Información Web
</h1>

<hr>
    <h5 align="center">
        23/06/2025
    </h5>
