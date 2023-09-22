'use client'


// import type { Props as ProductBase } from './SimpleWidget';

import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/src/store";

/**
 * Tarea: conectar y hacer funcionales las tarjetas en el dashboard 🟡 me ha faltado la parte del contador
*/


// const jsonBASE: Array<ProductBase> = [
//   {
//     id: '1',
//     title: 'Taza',
//     subtitle: 'para beber agua',
//     href: '/dashboard/counter',
//     label: 'Contador',
//     icon: <SiHomebrew size={50} />
//   },
//   {
//     id: '2',
//     title: 'Tetera',
//     subtitle: 'Para el té',
//     href: '/dashboard/counter',
//     label: 'Contador',
//     icon: <FaBottleWater size={50} />
//   },

// ]


export const WidgetGrid = () => {

  // lo que me ha faltado 👇🏼
  const isCart = useAppSelector( state => state.counter.count )

  return (
    <div className="flex flex-wrap items-center justify-center mt-12">
      {/* { // forma en la cual lo había hehco yo, de forma dinámica
        jsonBASE.map( item => (
          <SimpleWidget 
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))
      } */}
        <SimpleWidget 
          id="1"
          title={`${isCart}`}
          subtitle="producto"
          label="hola producto"
          href="/dashboard/counter"
        />
      </div>
  )
}
