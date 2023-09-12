import { inter } from '@/fonts'
import './globals.css'
// import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '🙀Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Navigation />
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          {children}
        </main>
      </body>
    </html>
  )
}
