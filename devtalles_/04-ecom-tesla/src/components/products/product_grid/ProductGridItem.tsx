'use client'

import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
  product: Product,
}

export const ProductGridItem = ({product}: Props) => {
  // obliga a que sea client side de ahí el 'use client' ( se podrá poner en archivo a parte)
  const [displayImage, setDisplayImage] = useState(product.images[0]) // es la posición cero para que al pasar el mouse se vaya a la 1
  
  
  return (
    <div className="rounded-md overflow-hidden fade-in transition-all">
      <Link
        href={`${product.slug}`}
        
      >
        <Image 
          // src={`/products/${product.images[0]}`} // forma dura de hacerlo
          src={`/products/${displayImage}`} // forma dinámica
          //* Task: implementar el setDisplay para que al hacer hover cambie a la image 1 y al salir vuelva
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
          alt={product.title}
          className="w-full object-cover rounded"
          width={500}
          height={500}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link href={ `/product/${product.slug}` } className=" hover:text-blue-400">
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  )
}
