'use client'

import React from 'react'
import { ArrowLeft, X } from 'lucide-react'

import RolesCard from '@/components/RolesCard'
import useGameStore from '@/lib/store'

const GamePage = () => {
  const players = useGameStore((state) => state.players)

  console.log(players)

  return (
    <div className="mx-auto flex h-screen max-w-146 flex-col items-center">
      <nav className="flex w-full items-center justify-between p-6">
        <ArrowLeft size={32} />
        <span className="text-center text-4xl font-bold">Roles</span>
        <X size={32} />
      </nav>

      <main className="flex w-full flex-col items-center px-6 pb-[140px]">
        {players.map((player) => (
          <RolesCard key={player.id} {...player} />
        ))}
      </main>
    </div>
  )
}

export default GamePage
