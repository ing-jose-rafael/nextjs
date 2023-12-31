import Link from 'next/link'
import styles from './navigatio.module.css'

const link = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Posts',
    route: '/posts'
  }
]

export default function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {link.map((item) => (
            <li key={item.label}>
              <Link href={item.route}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
