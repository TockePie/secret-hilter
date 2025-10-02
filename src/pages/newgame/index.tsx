import { useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '@ui/button'
import { Plus } from 'lucide-react'

import usePlayers from '@/hooks/use-players'
import useGameStore from '@/lib/store'

import PlayerCard from './player-card'

const NewGamePage = () => {
  const {
    players,
    handleAddPlayer,
    handleRemovePlayer,
    handleRenamePlayer,
    recordPlayers
  } = usePlayers()
  const resetPlayers = useGameStore((state) => state.resetPlayers)
  const updateStatus = useGameStore((state) => state.updateStatus)

  const handleStartGame = () => {
    resetPlayers()
    recordPlayers()
    updateStatus('role-revealing')
  }

  useEffect(() => handleAddPlayer(), [])

  return (
    <div className="mx-auto flex h-screen max-w-146 flex-col items-center">
      <nav className="flex w-full items-center justify-between p-6">
        <div className="size-8" />
        <span className="text-center text-4xl font-bold">Players</span>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleAddPlayer}
          disabled={players.length >= 10}
        >
          <Plus className="size-7" strokeWidth={2.5} />
        </Button>
      </nav>

      <main className="flex w-full flex-col items-center gap-2 px-6 pb-[140px]">
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

      <footer className="fixed inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-stone-100/90 p-6 pt-3 backdrop-blur-md">
        <p className="text-stone-500">
          Recommended to have from 5 to 10 players.
        </p>

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

export default NewGamePage
