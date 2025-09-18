import React from 'react'
import { Button } from '@ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import CreditsDialog from '../components/CreditsDialog'

const Home = () => (
  <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-between p-4">
    <div className="my-8 flex flex-col items-center gap-6">
      <Image
        src="/secret-hitler-logo.png"
        alt="Secret Hitler Logo"
        width={200}
        height={200}
      />
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-5xl font-bold">Secret Hitler</h1>
        <p className="text-xl text-stone-500">Web app by Maxim Rocky</p>
      </div>
    </div>

    <div className="flex w-full flex-col gap-4">
      <Link href="/newgame">
        <Button size="mobile">New game</Button>
      </Link>

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

export default Home
