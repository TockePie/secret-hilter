import { Link } from 'react-router'
import { Button } from '@ui/button'

export default function NoGamePage() {
  return (
    <>
      <main className="flex w-full flex-col items-center gap-2 px-6 pb-[140px]">
        <img
          src="/broken-game-console.png"
          alt="Broken game console"
          className="size-64 object-contain"
        />

        <div className="text-con">
          <h3>It seems the game hasn't started yet. 😢</h3>

          <p className="body-2">Press the button below to start the game.</p>
        </div>
      </main>

      <footer className="max-sm:standalone:pb-10 fixed inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-stone-100/90 p-6 pt-3 backdrop-blur-md">
        <Button className="max-w-134" size="mobile" asChild>
          <Link to="/newgame">New game</Link>
        </Button>
      </footer>
    </>
  )
}
