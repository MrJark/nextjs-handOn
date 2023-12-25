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
    // 1º obtener los productos
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
    // 2ºObtener el total de páginas
    const totalCount = await prisma.product.count({}) // cuenta todos los productos
    const totalPage = Math.ceil(totalCount / take ) // la función Math.ceil() hace que si la división entre los productos y las páginas por producto da decimal, ej: 48 productos a 12 productos da 4 páginas enteras pero si son 49 productos, será 4.1 páginas,suma una página y en vez de ser el decimal, 4.1, será 5

    // console.log(products);
    return {
      currentPage: page,
      totalPage: totalPage,
      products: products.map( product => ({
        ...product,
        images: product.ProductImage.map( img => img.url)
      }))
    }
  } catch (error) {
    throw new Error('Products could not be loaded')
  }
}
