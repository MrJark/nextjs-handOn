import Image from "next/image"

import { TbBrandDaysCounter } from 'react-icons/tb'
import { BiHomeAlt2 } from 'react-icons/bi'
import { IoHeartOutline, IoLogoReact } from 'react-icons/io5';
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import { SiNextdotjs } from 'react-icons/si'

import { SidebarMenuItem } from "./SidebarMenuItem"


const menuItems= [
    {
        path: '/dashboard/main',
        icon: <BiHomeAlt2 size={40} />,
        title: 'Main',
        subtitle: 'Visualización',
    },
    {
        path: '/dashboard/counter',
        icon: <TbBrandDaysCounter size={35} />,
        title: 'Counter',
        subtitle: 'Visualización',
    },
    {
        path: '/dashboard/pokemons',
        icon: <MdOutlineCatchingPokemon size={35} className='text-red-500'/>,
        title: 'Pokedex',
        subtitle: 'All pokemons are here',
    },
    {
        path: '/dashboard/favs',
        icon: <IoHeartOutline size={35} />,
        title: 'Fav Pokemons',
        subtitle: 'Global State',
    },
]

export const Sidebar = () => {
    return (

        <div id="menu" 
            style={{ width: '400px'}}
            className="bg-gray-950 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className=" flex text-4xl justify-between pt-6 px-24 ">
                <IoLogoReact className=' text-cyan-400 animate-spin-slow-react' />
                <SiNextdotjs className=' text-white animate-pulse' />
            </div>
            <div id="profile" className="px-6 pb-4 pt-8">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image width={8} height={8} className="rounded-full w-8 h-8" src="https://unavatar.io/github/mrjark" alt="mrjark photo" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        MrJark
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                
                {
                    menuItems.map( item => (
                        <SidebarMenuItem
                            key={item.path}
                            path={item.path} 
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon} 
                        />

                    ))
                }

            </div>
        </div>
    )
}
