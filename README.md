# SpotiApp

Proyecto de prueba de algunos conceptos básicos de Angular 7 tales como:

- HttpClient.
- Services.
- Routes.
- Pipes.
- Comunicación entre componentes acoplados.
- Comunicación entre estructuras dinámicas.
- Directivas ngFor y ngIf.

El proyecto fué generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Getting Started

### Prerequisites

Para poder levantar la aplicación se requiere del siguiente software:

- [node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript
- [Angular CLI](https://cli.angular.io/) - Interfaz de línea de comandos para Angular

Adicionalmente, para poder utilizar el proyecto se requiere de un token de autenticación de Spotify.
Para esto, primero debemos debemos crearnos un Client Id desde https://developer.spotify.com/dashboard/.
Una vez que se tiene el client_id y el client_secret, se puede solicitar el token enviando una petición HTTP con su método POST a la URL https://accounts.spotify.com/api/token de la siguiente manera:
![](https://user-images.githubusercontent.com/23145218/56780242-e9745400-67b4-11e9-820d-fe71e837016e.png)

### Installing

Para ejecutar un servidor de desarrollo, ir a la raíz del proyecto y ejecutar:

```
  ng serve
```

Luego es posible ingresar al sitio web desde la siguiente URL

```
http://localhost:4200/
```

Para que el sitio web funcione, es necesario ingresar un token de autenticación de Spotify en el cuadro de texto ubicado en la parte derecha de la barra de navegación.

## Running the tests

### Ingresando Token y navegando en la pagina principal

![](https://user-images.githubusercontent.com/23145218/56782509-d87c1080-67bd-11e9-8ddf-8e0e6a14d04f.gif)

### Realizando una búsqueda de canciones y artistas

![](https://user-images.githubusercontent.com/23145218/56782356-28a6a300-67bd-11e9-8b80-7c0b3b580b98.gif)

## Built With

- [Angular 7](https://angular.io/) - Framework SPA
- [NGX Bootstrap](https://valor-software.com/ngx-bootstrap/#/) - Librería de componentes Bootstrap desarrollados con componentes nativos de Angular

## Author

- **Arrúa Luciano** - _Initial work_ - [PurpleBooth](https://github.com/lucianorarrua)
