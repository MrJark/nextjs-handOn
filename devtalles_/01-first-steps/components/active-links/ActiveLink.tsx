'use client'
import Link from "next/link"
import style from './ActiveLink.module.css'; 
import { usePathname } from 'next/navigation'

interface Props {
    path: string,
    text: string,
}


export const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname(); // si vas a usar el usePathname es OBLIGATORIO usar el 'use client'
    console.log(pathName);
    

    return (
        <>
            <Link 
                className={ `${style.link} ${ (pathName === path) && style['active-link']} mr-4` }
                href={path}
            >
                {text}
            </Link>
        </>
    )
}
