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

- Si quieres tener subrutas, o lo que se llaman rutas dinámicas, dentro de la carpeta **post**, por ejemplo, que deberá tener su page.jsx, **como subruta tienes que tener una carpeta con el nombre que quieras entre corchetes, []**, por ejemplo **[id]** y dentro de esta, para que sea una ruta, debe tener  tambien el file page.jsx

- Nextjs es compatible con css modules

- La carpeta components se puede poner tanto fuera como dentro del app pero, supongo que como buena práctica ya que aun es pronto para decirlo, se debe colocar fuera para no confundir y así tener solo dentro de la app las rutas, en mi opinion

- Con respecto a los estilos tiene sentido que para el **global** sea un **global.css** mientras que para los componentes será **nombreDelComponente.module.css** porque esto lo que hará será darle un hash a cada uno para que no hayan colisiones con otros componentes. 
