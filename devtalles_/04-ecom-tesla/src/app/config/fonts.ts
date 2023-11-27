// Este archivo es útil porque así solo tendré que cambiar las fuentes en un único archivo
import { Inter, Montserrat_Alternates, Ubuntu } from "next/font/google";


export const inter = Inter({ 
  subsets: [ 'latin' ] 
})

// export const titleFont = Montserrat_Alternates({
//   subsets: ['latin'], 
//   weight: ['500', '700']
// })
export const titleFont = Ubuntu({
  subsets: ['latin'],
  weight: [ '500', '700' ]
})