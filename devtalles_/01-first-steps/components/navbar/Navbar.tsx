// Los componentes por defecto son 'server component' y por tanto, podemos usar los async y await en los mismos

import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-links/ActiveLink"


const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'},
]

export const Navbar = async() => {
  return (
    <nav className=" flex bg-slate-800 bg-opacity-30 p-2 m-2 rounded">

      <Link href='/' className="flex flex-1 items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex-1 flex justify-end">
        { // lo único dinámico de esta página es esta parte
          navItems.map( item => (
            // <Link key={item.path} className="mr-2" href={item.path}>{item.text}</Link>
            <ActiveLink key={item.path} { ...item } /> // como el link ya viene con lo que necesita, porque lo he creado así, con solo poner el spread ya sería suficiente para que valide si vienen o no esas props
          ))
        }
      </div>

        {/* <div className=" flex-1 flex flex-row justify-around text-center">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/pricing">Pricing</Link>
        </div> */}
    </nav>
  )
}
