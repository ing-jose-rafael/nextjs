import Link from 'next/link'

const link = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }
]

export default function Navigation () {
  return (
    <header>
      <nav>
        <ul>
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
