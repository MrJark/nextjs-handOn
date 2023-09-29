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

- 
