'use client'

import { useState } from 'react'

import useGameStore from '@/lib/store'
import { LobbyPlayer } from '@/types/player'
import getRandomAvailableColor from '@/utils/get-random-available-color'
import getRoles from '@/utils/get-roles-array'
import shuffleArray from '@/utils/shuffle-array'

const usePlayers = () => {
  const addPlayers = useGameStore((state) => state.addPlayers)
  const [players, setPlayers] = useState<LobbyPlayer[]>([])

  const handleAddPlayer = () => {
    if (players.length >= 10) return

    const usedColors = players.map((player) => player.color)
    const randomColor = getRandomAvailableColor(usedColors)

    const newPlayer = {
      // XXX: Removed as it causes crash on local network. Return when the app will be released
      // id: crypto.randomUUID(),
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: `Player ${players.length + 1}`,
      color: randomColor
    } as LobbyPlayer
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

  const recordPlayers = () => {
    const rolesArray = shuffleArray(getRoles(players.length))

    addPlayers(
      players.map((player: LobbyPlayer, index: number) => ({
        ...player,
        role: rolesArray[index]
      }))
    )
  }

  return {
    players,
    handleAddPlayer,
    handleRemovePlayer,
    handleRenamePlayer,
    recordPlayers
  }
}

export default usePlayers
