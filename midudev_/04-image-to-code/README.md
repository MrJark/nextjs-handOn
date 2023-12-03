# Image to Code app

Proyecto de [Midudev](https://www.youtube.com/watch?v=Mhk78pRLHeo&t=313s) donde voy a hacer el código para generar a través de una imagen el código html y css. Esto lo voy a hacer a través de la API de ChatGPT

## Importanciones y dependencias

- Prettier como dependencia de desarrollo `npm add prettier -D`

- Instalo [Shadcn/ui para Next](https://ui.shadcn.com/docs/installation/next) con `npx shadcn-ui@latest init`

  Componentes que uso de shadcn:

  - Button `npx shadcn-ui@latest add button`
  - Input `npx shadcn-ui@latest add input`
  - Label `npx shadcn-ui@latest add label`

- Para usar la librería de [OpneAI](https://platform.openai.com/docs/libraries/node-js-library) podría usar esta pero es más rentable y mejor usar la que tiene Vercel en npm como [ai](https://www.npmjs.com/package/ai). Para instalar este _sdk_ de vercel lo hago con `npm install ai` y para usar sus dependencias necesito instalar openai con `npm install openai`. Además, para usar openai necesitas una api key que en su sitio te la dan.

- Para el Drag and Drop voy a usar la librería [File UI](https://www.files-ui.com) y la instalo con `npm install @files-ui/react`

## Comentarios y apostes interesantes

- Las **funciones generativas**, `function* function_name () {}`, la característica que tienen es que tienen más de un return, tienen un _yield_
