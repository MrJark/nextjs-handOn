# nextjs-handOn

Un repo donde voy a ir haciendo proyectos para practicar el framework de React, NEXT JS

## Datos interesantes a tener en cuenta

- `import type { Metadata } from "next";` tener esto como type ne la meta de cada página te ayudará a saber que metadata tienes que poner para que todo sea mas SEO friendly ( pulsas ctrl + spoace y te salen todas )

  Para saber más de los metatags, [google](https://developers.google.com/search/docs/crawling-indexing/special-tags) es tu amigo

- Aquellos elementos que sean compartidos a nivel global de la app, como puede ser el header o una barra de navegaciñon, debes crear un acarpeta **componentes** en la raiz

- Por defecto **todo** es server components

- Para tener imágenes de webs agenas a la que estás construyendo, necesitas [modificar](https://nextjs.org/docs/messages/next-image-unconfigured-host) el next.config.js

- AL usar la _metadata_ **no es posible hacerlo en la parte del cliente**, con el _'use client'_. Como buena práctica en Next, cuanto menos tengas en la parte del cliente mejor por tanto, lo mejor será que te lleves aquello que te hace falta tener en la parte del cliente y separarlo en un componente específico. Por ejemplo, en el **02-dashboard** lo hago con la parte del contador en el **counter**

- Configuración de Eslint y Prettier [Desarrollo Útil](https://www.youtube.com/watch?v=3BHXuZvI4FI)

- Los componentes que sean `'use client'` **NO** pueden ser _[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#how-server-actions-work)_. Los server actions permiten evitar crear los API endpoints

---

## How to update Node

Para cambiar de versión en Node en macOS, puedes utilizar NVM (Node Version Manager). Asegúrate de tener Git instalado, ya que NVM depende de él. Sigue estos pasos:

Instala NVM siguiendo las instrucciones en la página oficial de NVM. Para instalar NVM en macOS, abre la Terminal y ejecuta el siguiente comando:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

Esto descargará e instalará NVM en tu sistema.

Cierra y vuelve a abrir la Terminal para que los cambios surtan efecto.
Verifica que NVM se haya instalado correctamente ejecutando el siguiente comando:
nvm --version

Esto debería mostrar la versión de NVM instalada.

Para ver todas las versiones de Node.js que tienes instaladas, ejecuta el siguiente comando:
nvm ls

Si deseas instalar una nueva versión de Node.js, ejecuta el siguiente comando y reemplaza con la versión que deseas instalar:
nvm install <version>

Por ejemplo, para instalar la versión 16.14.0, ejecuta:

nvm install 16.14.0

Para cambiar entre versiones de Node.js, ejecuta el siguiente comando y reemplaza con la versión que deseas utilizar:
nvm use <version>

Por ejemplo, para usar la versión 16.14.0, ejecuta:

nvm use 16.14.0

Si deseas que una versión específica de Node.js sea la versión predeterminada, ejecuta el siguiente comando y reemplaza con la versión que deseas establecer como predeterminada:
nvm alias default <version>

Por ejemplo, para establecer la versión 16.14.0 como predeterminada, ejecuta:

nvm alias default 16.14.0

Para ver las versiones de Node.js disponibles para instalar, ejecuta el siguiente comando:
nvm ls-remote

Recuerda reemplazar con la versión específica que deseas instalar o usar en cada comando.

## Intalaciones y paquetes útiles

- [React Icons](https://react-icons.github.io/react-icons/) a través de `npm install react-icons --save`

- El avatar lo he conseguido de [unavatar](https://unavatar.io/#/) y para configurarlo he hecho con la [info de Nextjs](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns)

- Para manejar estados en el _02-dashboard_ voy a instalar [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
