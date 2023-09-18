import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ weight: '500', style: 'normal', subsets: ["latin"]}) // ojo a las fuentes que coges y las propiedades obligatorias. Ojo: si quitas el turbopack, para que los mudoles funcionen, los subsets son obligatorios o por lo menos, lo son si no quitas el proload y es un arreglo


export const metadata: Metadata = {
  title: 'mrjark website',
  description: 'Generated with 💚 by mrjark',
}

export default function RootLayout ({ // este es un HOC proque recibe un children
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
