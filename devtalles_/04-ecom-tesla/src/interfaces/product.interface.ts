// interfaz provisional
export interface Product {
  id: string // puedes hacerlo obligatorio gracias a que está en la basa de prisma
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  // type: Types; // se genera una incompatibilidad porque en la DB tienes category y aquí type
  gender: Genders
}

export type Genders = 'men' | 'women' | 'kid' | 'unisex'
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Types = 'shirts' | 'pants' | 'hoodies' | 'hats';
