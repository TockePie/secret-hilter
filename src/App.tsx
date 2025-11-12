import { Link } from 'react-router'
import { Button } from '@ui/button'
import { ExternalLink } from 'lucide-react'

import AbortDialog from './components/AbortDialog'
import ContinueAlert from './components/ContinueAlert'
import CreditsDialog from './components/CreditsDialog'
import useHasGame from './hooks/use-has-game'

export default function App() {
  const { hasGame, setHasGame } = useHasGame()

  return (
    <main className="max-sm:standalone:pb-10 page justify-between p-4">
      <div className="my-8 flex flex-col items-center gap-6">
        <img
          src="/secret-hitler-logo.png"
          alt="Secret Hitler Logo"
          className="size-[200px]"
        />
        <div className="text-con">
          <h1>Secret Hitler</h1>
          <p className="body-2">Web app by Maxim Rocky</p>
        </div>
      </div>

      {hasGame ? (
        <div className="flex w-full flex-col gap-3">
          <ContinueAlert />
          <AbortDialog
            triggerComp={
              <Button size="mobile" variant="ghost-destructive">
                Abort game
              </Button>
            }
            onAbort={() => setHasGame(false)}
          />
        </div>
      ) : (
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
      )}
    </main>
  )
}
