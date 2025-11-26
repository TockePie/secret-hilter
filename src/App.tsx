import { Link } from 'react-router'
import { Button } from '@ui/button'
import { Globe } from 'lucide-react'

import AbortDialog from '@/components/AbortDialog'
import ContinueAlert from '@/components/ContinueAlert'
import useHasGame from '@/hooks/use-has-game'

import InfoContextMenu from './components/InfoContextMenu'

export default function App() {
  const { hasGame, setHasGame } = useHasGame()

  return (
    <div className="page">
      <nav className="flex w-full items-center justify-between p-6">
        <div className="size-8"></div>
        <div className="flex gap-5">
          <Globe className="size-7" strokeWidth={2} />
          <InfoContextMenu />
        </div>
      </nav>

      <main className="max-sm:standalone:pb-10 page w-full justify-between p-4">
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
          <Link to="/newgame" className="w-full">
            <Button size="mobile">New game</Button>
          </Link>
        )}
      </main>
    </div>
  )
}
