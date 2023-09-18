import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const inter = Ubuntu({ weight: '300', style: 'normal' }) // ojo a las fuentes que coges y las propiedades obligatorias


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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
