## Cookies 
Obtener cookies a travez de una peticion post desde el frontend al backend al primer endpoint despues la cookie para al segundo endpoint.
## Librerias añadidas:
- Axios: lo utilizamos para obtener la peticion post del backend enviando los datos al body.

## Creacion de formulario 
- Creamos un formulario con dos inputs y un boton representan (nombre cookie = valor cookie) y el boton de enviar.
- Obtenemos los valores ingresados a los input.
- Clic al boton para mandar el 'nombre y valor de la cookie'.
## Peticion a Backend:
- Axios.post permite obtener los valores que agregamos en el formulario y obtenerlos en el backend.
## Proceso:
1. El backend obtiene la el nombre y valor de la cookie pasando al primer endpoint.
2. Obtener los valores al valor y crear la cookie desde el primer endpoint.
3. Mandar resultado al segundo endpoint haciendo la comunicacion con el primero por medio de axios.
4. El segundo endpoint obtiene la comunicacion y envia una respuesta al primer endpoint. 
5. El primer endpoint obtiene la respuesta del segundo y la manda al frontend.

## Resultados:
- Los resultados se veran reflejados en un alerta para poder visualizar la cookie en el navegador.

## Ejecucion del proyecto: 
- npm start para ejecutar tanto Backend como frontend