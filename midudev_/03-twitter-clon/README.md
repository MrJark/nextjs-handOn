# X clone with Tailwind, Next an TS

Clon de X con [Midudev](https://www.youtube.com/watch?v=V_kD2q_aoy8&t=46s)

## Dependencias e instalaciones

- He iniciado el proyecto con **pnpm**

- Añdado el esLint con **npx eslint --init** y pnpm y te preguntará lo que quieres que tenga y haga

- Para conectar el proyecto con [Supabase](https://supabase.com) necesitas la siguiente [info](https://supabase.com/docs/guides/auth/auth-helpers/nextjs). La 'buena' config para instalar es **pnpm install @supabase/auth-helpers-nextjs @supabase/supabase-js -E**

  El archivo y la config de .env.local lo he hecho con la ducomentación de Supabase del link 'info'. Vas a la parte de API y ahí tienes los links

- 

## Comentarios útiles

- Aquello que sea _clikcable_ **siempre** se tendrá que renderizar en el **cliente**. tendrás que usar el _'use client'_ en ese componente
