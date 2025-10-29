import { Link } from 'react-router'
import { Button } from '@ui/button'
import { ExternalLink } from 'lucide-react'

import CreditsDialog from './components/CreditsDialog'

export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-between p-4">
      <div className="my-8 flex flex-col items-center gap-6">
        <img
          src="/secret-hitler-logo.png"
          alt="Secret Hitler Logo"
          className="size-[200px]"
        />
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-5xl font-bold">Secret Hitler</h1>
          <p className="text-xl text-stone-500">Web app by Maxim Rocky</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <Link to="/newgame">
          <Button size="mobile">New game</Button>
        </Link>

        <Link
          to="https://www.secrethitler.com/assets/Secret_Hitler_Rules.pdf"
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
