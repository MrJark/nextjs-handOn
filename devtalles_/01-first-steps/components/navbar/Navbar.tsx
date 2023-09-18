// Los componentes por defecto son 'server component' y por tanto, podemos usar los async y await en los mismos

import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"


const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'},
]

export const Navbar = async() => {
  return (
    <nav className=" flex bg-slate-800 bg-opacity-30 p-2 m-2 rounded">
        <span className="flex-1 ">
          <Link href='/' className="flex items-center">
            <HomeIcon className="mr-2" />
            Home
          </Link>
        </span>

        <div className=" flex-1 flex flex-row justify-around text-center">
          {
            navItems.map( item => (
              <Link key={item.path} className="" href={item.path}>{item.text}</Link>
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
