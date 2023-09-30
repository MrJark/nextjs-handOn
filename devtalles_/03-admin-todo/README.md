# Anotaciones para Docker y Postgres

## Comentarios

- Hago un **npx prisma init** para inicializar [prisma](https://vercel.com/guides/nextjs-prisma-postgres)

- Intalación de [Yup](https://www.npmjs.com/package/yup?activeTab=code) **npm i yup**

- Instalo los react-icons -> **npm install react-icons --save**

- Para trabajar con las cookies con next en el client side, lo más sencillo es instalar [cookies-next](https://www.npmjs.com/package/cookies-next)

## Develop

1. Tener Docker Desktop arriba y levantar la base de datos con:

```
  docker compose up -d
```

2. Crear una copia de .env.template y renombrarlo como .env
3. Remplazar las variables de entorno por las tuyas propias
4. Ejecutar **npm i**
5. Ejecutar **npm run dev**
6. Ejecutar los siguientes comandos de prisma para la migración:

```
  npx prisma migrate dev
  npx prisma generate
```

7. Ejecutar el SEED para crear la [base de datos local](localhost:3000/api/seed)

## Prisma Commands

- `npx prisma init` para unicializar prisma
- `npx prisma migrate dev` para migrar y que la db esté en sincronía
- `npx prisma generate` para generar el cliente de prisma para manejar la db. Lo que te devuelve es:

  ✔ Generated Prisma Client (v5.3.1) to ./node_modules/@prisma/client in 37ms

  Start using Prisma Client in Node.js (See: https://pris.ly/d/client)

  ```
  import { PrismaClient } from '@prisma/client'
  const prisma = new PrismaClient()
  ```

  or start using Prisma Client at the edge (See: https://pris.ly/d/accelerate)

  ```
  import { PrismaClient } from '@prisma/client/edge'
  const prisma = new PrismaClient()
  ```

  See other ways of importing Prisma Client: http://pris.ly/d/importing-client

## Prod

-

## Stage

-
