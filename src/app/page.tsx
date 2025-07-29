import React from 'react'
import { Button } from '@ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import CreditsDialog from './credits-dialog'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 justify-between max-w-xl mx-auto">
      <div className="flex flex-col items-center gap-6 my-8">
        <Image
          src="/secret-hitler-logo.png"
          alt="Secret Hitler Logo"
          width={200}
          height={200}
        />
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-5xl font-bold text-stone-800">Secret Hitler</h1>
          <p className="text-xl text-stone-500">Web app by Maxim Rocky</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Button size="mobile">Start game</Button>
        <Link
          href="https://www.secrethitler.com/assets/Secret_Hitler_Rules.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" size="mobile">
            Rules
            <ExternalLink color="#292524" />
          </Button>
        </Link>

        <CreditsDialog />
      </div>
    </main>
  )
}

export default Home
