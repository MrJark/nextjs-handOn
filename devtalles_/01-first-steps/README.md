# Primera app del curso de Devtalles Nextjs 13

He inicializado con **npm**

## Instalaciones y dependencias

- Acturalmente turbopack está en beta pero voy a cambiar el script en el **.json** para usarlo:

  ```json
    "dev": "next dev --turbo",
  ```

- 

## Comentarios

- !OJO! Dependiendo de la fuente que elijas, tendrás que ver que es lo obligatorio que tienes que pasarle. Por ejemplo, en **Ubuntu** lo obligatorio es el weight y no el subsets

- En la carpeta app, hay ciertos nombres que están reservados por ejemplo: pages, error, layout...

- Hay que tener en las páginas el **export default...** de manera **obligada** si queires que funcionen las rutas

- La metadata es muy importante para el **SEO** ya que le dice a google de que trata. Esto lo construyes en la página de **layout.tsx**

- Instala las extensones recomendadas en [este](https://gist.github.com/klerith/2d46749155918952b593e952dc7cf5c8) fichero para que sea más sencillo desarrollar en Next13

- Al crear la carpeta general e introducir todas las rutas dentro, puedo tener un layout _general_ y no duplicar código. Pero es **muy** importante que tengas en cuenta que si a la carpeta no le pones los **paréntesis** te lo pondrá como ruta mientas que si los pones, le estarás diciendo a Next que no la tenga en cuenta para la root

- 
