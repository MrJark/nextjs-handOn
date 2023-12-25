'use server'

import prisma from "@/lib/prisma"

export const getPaginatedProductsWithImages = async() => {
try {
  const products = await prisma.product.findMany({
    include: {
      ProductImage: {
        take: 2, //coges dos proque a lo mejor no tienes más que dos images o el mínimo es dos pero el máximo puede ser x
        select:{
          url: true
        }
      }
    }
  })
  console.log(products);
  
} catch (error) {
  
}
}