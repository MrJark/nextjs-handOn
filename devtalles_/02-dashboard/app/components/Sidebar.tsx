import Image from "next/image"

import { TbBrandDaysCounter } from 'react-icons/tb'
import { BiHomeAlt2 } from 'react-icons/bi'
import { IoLogoReact } from 'react-icons/io5';

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
]

export const Sidebar = () => {
    return (

        <div id="menu" 
            style={{ width: '400px'}}
            className="bg-gray-950 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
            <div id="logo" className=" flex text-4xl justify-center pt-6 ">
                <IoLogoReact className=' text-cyan-400 animate-spin-slow-react' />
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
