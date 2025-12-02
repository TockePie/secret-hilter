import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Button } from '@ui/button'
import { Plus } from 'lucide-react'

import usePlayers from '@/hooks/use-players'
import useGameStore from '@/lib/store'

import PlayerCard from './player-card'

export default function NewGamePage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const {
    players,
    handleAddPlayer,
    handleRemovePlayer,
    handleRenamePlayer,
    recordPlayers
  } = usePlayers()
  const { abortGame, updateStatus } = useGameStore.getState()
  const containerRef = useRef<HTMLDivElement>(null)
  const prevLength = useRef(players.length)

  const handleStartGame = () => {
    abortGame()
    recordPlayers()
    updateStatus('role-revealing')
    navigate('/game/role-revealing', { replace: true })
  }

  useEffect(() => handleAddPlayer(), [])

  useEffect(() => {
    if (!containerRef.current) return

    if (players.length > prevLength.current) {
      const lastChild = containerRef.current.lastElementChild
      lastChild?.scrollIntoView({ behavior: 'smooth' })
    }

    prevLength.current = players.length
  }, [players])

  return (
    <div className="page">
      <nav className="flex w-full items-center justify-between p-6 text-center">
        <div className="size-8" />
        <h2>{t('new-game-page.navbar')}</h2>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleAddPlayer}
          disabled={players.length >= 10}
        >
          <Plus className="size-7" strokeWidth={2.5} />
        </Button>
      </nav>

      <main ref={containerRef} className="standalone:pb-39 page-main pb-35">
        {players.map((p) => (
          <PlayerCard
            key={p.id}
            renameFn={(newName: string) => handleRenamePlayer(p.id, newName)}
            removeFn={handleRemovePlayer(p.id)}
            addPlayerFn={handleAddPlayer}
            {...p}
          />
        ))}
      </main>

      <footer className="fixed-bottom">
        <p className="body-3">{t('new-game-page.footer-annotation')}</p>

        <Button
          size="mobile"
          disabled={players.length < 5}
          onClick={handleStartGame}
        >
          {t('new-game-page.start-game-btn')}
        </Button>
      </footer>
    </div>
  )
}
