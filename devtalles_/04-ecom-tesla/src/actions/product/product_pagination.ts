'use server'

import prisma from "@/lib/prisma"

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedProductsWithImages = async({
  page=1,
  take=12
}: PaginationOptions) => {
  if(isNaN(Number(page))) page = 1 // validación para que la página siempre sea un número
  if(page < 1) page = 1
  try {
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1 ) * take, // para configurar el pasar a la siguiente página y que salgan el doble de los artículos. Si en la pag 1 son 12 los artículos, al dar siguiente o hacia abajo, los articulos de la página 2 deben ser los de la 1 mas los de la 2 que son 12*2=24
      include: {
        ProductImage: {
          take: 2, //coges dos proque a lo mejor no tienes más que dos images o el mínimo es dos pero el máximo puede ser x
          select:{
            url: true
          }
        }
      }
    })
    // console.log(products);
    return {
      products: products.map( product => ({
        ...product,
        images: product.ProductImage.map( img => img.url)
      }))
    }
  } catch (error) {
    throw new Error('Products could not be loaded')
  }
}
