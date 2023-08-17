# Primer proyecto de Next.js

Este proyecto es una clase que estoy siguiendo de [Midudev](https://www.youtube.com/watch?v=tA-_vAz9y78&t=433s)

## Instalaciones

- **Lo primero de todo:**

    1. Tienes que crear una carpeta en la raíz que sea **.babelrc** o **babel.config.js** con la siguiente configuración:
    <pre>
    {
        "presets": ["next/babel"],
        "plugins": []
    }
    </pre>

    2. Tienes que añadir en el **.eslintrc** en la parte de extends el **" next/babel "**:

    <pre>
    {
        "extends": ["next/babel","next/core-web-vitals"]
    }
    </pre>

    3. En la parte del **next.config.js** poner:

    <pre>
        /** @type {import('next').NextConfig} */
        const nextConfig = {
        experimental: {
            appDir: true,
        },
            reactStrictMode: true,
        }
        module.exports = nextConfig
    </pre>

- Voy a usar el eslint de standar y lo voy a instalar así -> **npm i standard -D** -> Configuración:

    <pre>
        "extends": ["./node_modules/standard/eslintrc.json"]
    </pre>

- 

## Explicaciones y anotaciones interesantes

- En Nextjs necesitas que las rutas tengan el page.js o page.jsx. Si usas por ejemplo index.jsx no funcionará

- La rutas en Nextjs se hacen a través de los file systems, es decir, si quieres tener una pagina que sea **/about** tienes que crear una carpeta dentro de app que ponga about y dentro de esa, tener el page.jsx y si no está así, no lo detecta como ruta. Solo y tan solo las carpetas que estén dentro del app serán rutas si tienen dentro de estas un **page.js o page.jsx**. Por tanto, aquellas carpetas qeu crees por ejemplo, components, si no tiene un page, será una simple carpeta de components

- Nextjs es compatible con css modules

- Con respecto a los estilos tiene sentido que para el **global** sea un **global.css** mientras que para los componentes será **nombreDelComponente.module.css** porque esto lo que hará será darle un hash a cada uno para que no hayan colisiones con otros componentes
