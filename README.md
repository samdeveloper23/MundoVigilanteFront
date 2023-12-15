# tatooArt

-   App para tatuadores.

Se trata de una red social donde los usuarios se pueden registrar con dos tipos de perfil, artista o estudio. Independientemente del tipo de perfil, cualquier usuario puede hacer publicaciones con la intención de mostrar su trabajo o sus intereses y así ponerse en contacto con los demás usuarios.

Cada publicación consta de un título, descripción y foto o vídeo. A mayores se les puede añadir una ubicación y una categoría de publicación, es decir podrán especificar cual es la finalidad de la misma. Por ejemplo, si un estudio quiere ofertar sus instalaciones para alquilar puede indicarlo mediante estas categorías, o si un tatuador quiere mostrar su trabajo e indicar que está buscando empleo también puede hacer uso de ellas. Las publicaciones pueden ser comentadas por los demás usuarios y valoradas con likes.

La app cuenta con un buscador de publicaciones donde los usuarios podrán usar filtros basados en el tipo de publicación, nombre del autor, ubicación, o contenido de la descripción. Tambien existe un buscador de usuarios que permite obtener un listado de todos ellos, o solamente de los que pertenezcan a uno de los dos roles (artista o estudio).

Los usuarios registrados disponen de una sección de ajustes donde podrán modificar la información personal que se muestra al resto de miembros de la App, además sólo ellos pueden participar en la interacción (publicar, comentar likes...). Los usuarios anónimos únicamente podrán entrar como invitados y ver el contenido de la App.

## Instalación backend

-   Instalar dependencias mediante el comando **`npm install`** o **`npm i`**.

-   Guardar el archivo **`.env.example`** como .**`.env`** y cubrir los datos necesarios.

-   Ejecutar **`npm run initDB`** para crear la base de datos necesaria con todas sus tablas.

-   Ejecutar **`npm run dev`** para lanzar el servidor.

## Instalación frontend

-   Instalar dependencias mediante el comando **`npm install`** o **`npm i`**.

-   Ejecutar **`npm run dev`** para lanzar el cliente.

-   Abrir en el navegador la **`URL`** con el puerto correspondiente.
