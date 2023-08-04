import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

export const roboto = SpaceGrotesk({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-grotesk' // this is the name of the css variable introduced by the font function

})
