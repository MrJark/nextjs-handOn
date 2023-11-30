import { Product } from '@/interfaces';

interface Props {
  products: Product[]
}

export const ProductGrid = ({products}: Props) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10'>
      {
        products.map( (products) => (
          <span key={products.slug}>{products.title}</span>
        ))
      }
    </div>
  )
}
