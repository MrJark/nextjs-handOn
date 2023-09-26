# Anotaciones para Docker y Postgres

## Comentarios

- Hago un **npx prisma init** para inicializar [prisma](https://vercel.com/guides/nextjs-prisma-postgres)

- Intalación de [Yup](https://www.npmjs.com/package/yup?activeTab=code) **npm i yup**

## Develop

1. Levantar la base de datos
  ```
    docker compose up -d
  ```
2. Crear y renombrar el .env.template
3. Remplazar las variables de entorno por las tuyas propias
4. Ejecutar el SEED para crear la [base de datos local](localhost:3000/api/seed)

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
