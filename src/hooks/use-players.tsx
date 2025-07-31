'use client'

import { useState } from 'react'

import PlayerColor from '@/types/enums/player-color'
import { Player } from '@/types/player'

const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([])

  const handleAddPlayer = () => {
    const allColors = Object.values(PlayerColor)
    const usedColors = players.map((player) => player.color)
    const availableColors = allColors.filter(
      (color) => !usedColors.includes(color)
    )
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)]

    const newPlayer = {
      id: `${Date.now()}-${Math.random().toString().split('.')[1]}`,
      name: `Player ${players.length + 1}`,
      color: randomColor
    } as Player
    setPlayers([...players, newPlayer])
  }

  const handleRemovePlayer = (id: string) => () => {
    setPlayers(players.filter((player) => player.id !== id))
  }

  const handleRenamePlayer = (id: string, newName: string) => {
    const playerObject = players.map((player) =>
      player.id === id ? { ...player, name: newName } : player
    )
    setPlayers(playerObject)
  }

  return {
    players,
    handleAddPlayer,
    handleRemovePlayer,
    handleRenamePlayer
  }
}

export default usePlayers
