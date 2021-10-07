## Codificacion de Backend Cookies:
Obtener la cookie del frontend en el body y guardarla en una varible para despues crearla por medio
de axios pasando piendo una respuesta a un segundo endpoint alojado dentro del mismo backend.

## Librerias añadidas:
- Axios: utilizado para la comunicacion entre endpoindts del backend (endpoint 1 y endpoint 2)
- Express: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas): https://expressjs.com/es/4x/api.html
- Cors: intercambio de recursos entre orígenes. Es un mecanismo para permitir o restringir los recursos solicitados en un servidor web dependiendo de dónde se inició la solicitud HTTP.
- CookieParser: cookie-parser ubica en el objeto req, bajo req.cookies con un objeto que identifica las cookies por un nombre, un string.

## POST Cookies: (Endpoint1)
1. Obtener los nombre y valor de la cookie ingresada al frontend.
2. obtener valores del body y creando la cookie.

3. function dataCookieToString(datacookie)
### Algoritmo:
* Creacion de variable
* for(variable inicializada en 0 donde variable sera menor que a la dimension de la variable creada dentro de la funcion)
* Creacion de la Nombre y valor de la Cookie almacenada en la variable creada al inicio.
* retornamos la variable creada en la funcion datacookie.

4. function mkdataCookie(cookie):
- Creamos dos variables.
-  creamos una variable la cual devuelve una cadena que representa al objeto
- remplazamos signos con replace divida en una cadena en una matriz de subcadenas:
- for ( obtenemos posicion de la cookie colocada por 'Nombre' = 'valor' diviendolo por una matriz de subcadenas)
- obtenemos la cookie en la primera variable divido por la matriz de subcadenas y almacenado en la ultima variable creada.
- for(obtenemos la dimension de la variable cookie inicializada en 1)
- separamos por subcadenas y obtenemos el valor en la ultima variable
- restornamos la variable asignada a la funcion (cookie).

## GET Cookie: (Endpoint 2)
1. Obtener la cookie por medio de una variable utilizando la solicitud (req.headers.cookie) --> obtenida del header del axios de endpoint 1.
2. La variable es enviada nuevamente al endpoint 1 para una respuesta.

## Ejecucion del proyecto: 
- npm start para ejecutar tanto Backend como frontend