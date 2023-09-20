'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
    path: string,
    icon: JSX.Element,
    title: string,
    subtitle: string
}

export const SidebarMenuItem = ({ path, icon, subtitle, title}: Props) => {

    const currentPath = usePathname()

    return (
        <Link href={path} className={`
            w-full px-2 mt-3 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-gray-900 transition ease-linear duration-150
            ${ currentPath === path ? ' bg-cyan-700 text-slate-800 ' : ''}    
        `}>
            <div className="mr-2">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{path}</span>
            </div>
        </Link>
    )
}
