import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '@ui/button'
import { Plus } from 'lucide-react'

import usePlayers from '@/hooks/use-players'
import useGameStore from '@/lib/store'

import PlayerCard from './player-card'

export default function NewGamePage() {
  const navigate = useNavigate()
  const {
    players,
    handleAddPlayer,
    handleRemovePlayer,
    handleRenamePlayer,
    recordPlayers
  } = usePlayers()
  const { abortGame, updateStatus } = useGameStore.getState()

  const handleStartGame = () => {
    abortGame()
    recordPlayers()
    updateStatus('role-revealing')
    navigate('/game/role-revealing', { replace: true })
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

      <main className="standalone:pb-39 page-main pb-35">
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

      <footer className="fixed-bottom">
        <p className="body-3">Recommended to have from 5 to 10 players.</p>

        <Button
          size="mobile"
          disabled={players.length < 5}
          onClick={handleStartGame}
        >
          Start game
        </Button>
      </footer>
    </div>
  )
}
