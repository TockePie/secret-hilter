'use client'

import React, { useEffect } from 'react'
import { Button } from '@ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

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
  const resetPlayers = useGameStore((state) => state.resetPlayers)

  const handleStartGame = () => {
    resetPlayers()
    recordPlayers()
  }

  useEffect(() => handleAddPlayer(), [])

  return (
    <div className="mx-auto flex h-screen max-w-146 flex-col items-center">
      <main className="flex w-full flex-col items-center px-6 pb-[140px]">
        <span className="py-6 text-center text-4xl font-bold">Players</span>

        <div className="flex w-full flex-col items-center gap-2">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              name={player.name}
              color={player.color}
              renameFn={(newName: string) =>
                handleRenamePlayer(player.id, newName)
              }
              removeFn={handleRemovePlayer(player.id)}
            />
          ))}
        </div>

        {players.length < 10 && (
          <Button
            size="mobile"
            variant="ghost"
            className="pt-2 text-stone-500"
            onClick={handleAddPlayer}
          >
            <Plus className="h-12 w-12" strokeWidth={2.5} />
            Add player
          </Button>
        )}
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
          <Link href="/game">Start game</Link>
        </Button>
      </footer>
    </div>
  )
}
