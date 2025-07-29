import React, { ReactNode } from 'react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'

import './globals.css'

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Secret Hitler',
  description: 'A digital implementation of the Secret Hitler board game'
}

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={clsx(kanit.className, 'antialiased')}>{children}</body>
    </html>
  )
}
