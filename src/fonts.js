import { Inter, Roboto_Mono as RobotoMono, Space_Grotesk as SpaceGrotesk } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const robotoMono = RobotoMono({
  subsets: ['latin'],
  display: 'swap'
})

export const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  weights: [400, 700],
  variable: '--font-space-grotesk',
  display: 'swap'
})
