'use client' 
// por culpa del boton de Io

import { useUIStore } from "@/store"
import clsx from "clsx"
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"


export const SiderBar = () => {

  // las dos líneas estas son el manejador de estado
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen)
  const closeMenu = useUIStore( state => state.closeSideMenu)

  return (
    <div>
      {/* Div to background */}
      {
        isSideMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-white opacity-30" />
          )
        }
      {/* <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-white opacity-30" /> */}

      {/* Div to Blur */}
      {
        isSideMenuOpen && (
          <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"/>
        )
      }
      {/* <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"/> */}

      {/* Sidemenu */}
      <nav 
        // className="fixed p-5 right-0 top-0 w-[400px] h-[750px] rounded-bl-xl bg-black text-white shadow-2xl z-20 transform transition-all duration-300"
        // gracias a clsx puedes hacer lo siguiente:
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-[400px] h-[800px] rounded-bl-xl bg-black text-white shadow-2xl z-20 transform transition-all duration-300",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }
      >
        <IoCloseOutline 
          size={30} 
          onClick={ () => closeMenu()}
          className='absolute right-5 cursor-pointer transition-all duration-300 hover:rotate-90 z-10'
        />
        {/* Search Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input 
            type="text" 
            placeholder="Search"
            className="w-full bg-neutral-800 rounded-md pl-10 py-1 pr-10 border-b-2 text-xl focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Menu Options */}
        <div className="mt-10 grid gap-2">
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-neutral-800 rounded-md transition-all text-gray-300"
          >
            <IoPersonOutline size={20} className=''/>
            <span className="ml-3 text-lg">Profile</span>
          </Link>
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-neutral-800 rounded-md transition-all text-gray-300"
          >
            <IoTicketOutline size={20} className=''/>
            <span className="ml-3 text-lg">Orders</span>
          </Link>
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-neutral-800 rounded-md transition-all text-gray-300"
          >
            <IoLogInOutline size={20} className=''/>
            <span className="ml-3 text-lg">Log In</span>
          </Link>
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-neutral-800 rounded-md transition-all text-gray-300"
          >
            <IoLogOutOutline size={20} className=''/>
            <span className="ml-3 text-lg">Log Out</span>
          </Link>
        </div>

        {/* Divisor */}
        <div className="w-full h-px bg-neutral-500 my-10 rounded-full"/>

        <Link
          href="/"
          className="flex items-center p-2 hover:bg-neutral-800 rounded-md transition-all text-gray-300"
        >
          <IoShirtOutline size={20} className=''/>
          <span className="ml-3 text-lg">Products</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2 hover:bg-neutral-800 rounded-md transition-all text-gray-300"
        >
          <IoPeopleOutline size={20} className=''/>
          <span className="ml-3 text-lg">Users</span>
        </Link>

      </nav>
    </div>
  )
}
