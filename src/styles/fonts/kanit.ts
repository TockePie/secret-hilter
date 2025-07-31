import { Kanit } from 'next/font/google'

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export { kanit }
