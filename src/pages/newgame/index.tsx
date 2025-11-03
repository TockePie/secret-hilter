import { useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '@ui/button'
import { Plus } from 'lucide-react'

import usePlayers from '@/hooks/use-players'
import useGameStore from '@/lib/store'

import PlayerCard from './player-card'

export default function NewGamePage() {
  const {
    players,
    handleAddPlayer,
    handleRemovePlayer,
    handleRenamePlayer,
    recordPlayers
  } = usePlayers()
  const { resetPlayers, initiatePresident, updateStatus } =
    useGameStore.getState()

  const handleStartGame = () => {
    resetPlayers()
    recordPlayers()
    initiatePresident()
    updateStatus('role-revealing')
  }

  useEffect(() => handleAddPlayer(), [])

  return (
    <div className="page">
      <nav className="flex w-full items-center justify-between p-6 text-center">
        <div className="size-8" />
        <h2>Players</h2>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleAddPlayer}
          disabled={players.length >= 10}
        >
          <Plus className="size-7" strokeWidth={2.5} />
        </Button>
      </nav>

      <main className="standalone:pb-39 flex w-full flex-col items-center gap-2 px-6 pb-35">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            id={player.id}
            name={player.name}
            color={player.color}
            renameFn={(newName: string) =>
              handleRenamePlayer(player.id, newName)
            }
            removeFn={handleRemovePlayer(player.id)}
            addPlayerFn={handleAddPlayer}
          />
        ))}
      </main>

      <footer className="max-sm:standalone:pb-10 fixed inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-stone-100/90 p-6 pt-3 backdrop-blur-md">
        <p className="body-3">Recommended to have from 5 to 10 players.</p>

        <Button
          size="mobile"
          className="max-w-134"
          disabled={players.length < 5}
          onClick={handleStartGame}
        >
          <Link to="/game">Start game</Link>
        </Button>
      </footer>
    </div>
  )
}
