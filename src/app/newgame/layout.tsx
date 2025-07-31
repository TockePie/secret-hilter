import React, { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New game',
  description: 'Start a new game of Secret Hitler'
}

const NewGameLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

export default NewGameLayout
