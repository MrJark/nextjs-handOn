import { initialData } from "./seed";
import prisma from '../lib/prisma';


async function main() {

  // Pasos para boorar los contenidos de las tablas
  // 1º Borrar registros previos
  await Promise.all([
   prisma?.productImage.deleteMany(),
   prisma?.product.deleteMany(),
   prisma?.category.deleteMany(),
  ])
  const {categories, products} = initialData
  // 2º Insertar/Generar las catagorias e imágenes
  // await prisma?.category.create({ // para una sola categoría
  //   data: {
  //     name: 'Shirts',
  //   }
  // })
  // categories
  const categoriesData = categories.map( category => ({
    name: category
  }))
  // console.log(categoriesData);
  await prisma?.category.createMany({
    data: categoriesData
  })
  const cartegoriesDB = await prisma.category.findMany()
  // console.log(cartegoriesDB);
  // con el reduce siguiente lo que haces es apuntar el id a la categoría directamnete, tranformar el objeto categoriesDB en otro apra que solo tenga la categopría cno su id
  const categoriesMap = cartegoriesDB.reduce((map, category) => { // se podría hacer con un .map()
    map[ category.name.toLocaleLowerCase() ] = category.id
    return map
  }, {} as Record<string, string>) // <string =caytegory, string=category ID> orden de los strings
  
  // products
  // const {images, ...product1} = products[0]// para un solo producto
  // await prisma.product.create({
  //   data: {
  //     ...product1,
  //     categoryId: categoriesMap['shirts']
  //   }
  // })
  products.forEach( async (product) => {
    const {type, images, ...rest} = product

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    })
    // images
    const imagesData = images.map( image => ({ // creamos la imagen dandole la url y el id de cada una
      url: image,
      productId: dbProduct.id
    }))
    await prisma.productImage.createMany({ // inserción en prisma
      data: imagesData
    })
  })

  // console.log(initialData)
  // console.log('Seed executed correctly');
}

(() => {
  if(process.env.NODE_ENV === 'production') return
  main()
})()