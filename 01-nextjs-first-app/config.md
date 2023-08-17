# Primer proyecto de Next.js

Este proyecto es una clase que estoy siguiendo de [Midudev](https://www.youtube.com/watch?v=tA-_vAz9y78&t=433s)

## Instalaciones

- Lo primero de todo:

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

## Explicaciones y anotaciones interesantes

- 
