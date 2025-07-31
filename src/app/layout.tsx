import React, { ReactNode } from 'react'
import clsx from 'clsx'
import type { Metadata } from 'next'

import { kanit } from '@/styles/fonts/kanit'

import './globals.css'

const metadata: Metadata = {
  title: 'Secret Hitler',
  description: 'A digital implementation of the Secret Hitler board game'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className={clsx(kanit.className, 'antialiased')}>{children}</body>
    </html>
  )
}

export { metadata }
export default RootLayout
