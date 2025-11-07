import { Link } from 'react-router'
import { Button } from '@ui/button'

export default function NoGamePage() {
  return (
    <>
      <main className="page pb-35">
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

      <footer className="fixed-bottom">
        <Button className="max-w-134" size="mobile" asChild>
          <Link to="/newgame">New game</Link>
        </Button>
      </footer>
    </>
  )
}
