import Link from 'next/link';
import styles from './header.module.css';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Post',
    route: '/posts',
  },

]

export function Header () {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.headerUl}>
                {
                    links.map(({label, route}) => (
                    <li className={styles.headerLi} key={route}>
                        <Link href={route}>
                        {label}
                        </Link>
                    </li>
                    ))
                }
                </ul>
            </nav>
        </header>
    )
}
