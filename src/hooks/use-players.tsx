import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import useGameStore from '@/lib/store'
import type { LobbyPlayer } from '@/types/player'
import getRandomAvailableColor from '@/utils/get-random-available-color'
import getRoles from '@/utils/get-roles-array'
import shuffleArray from '@/utils/shuffle-array'

export default function usePlayers() {
  const { t } = useTranslation()
  const initiateGame = useGameStore((state) => state.initiateGame)
  const [players, setPlayers] = useState<LobbyPlayer[]>([])

  const handleAddPlayer = () => {
    if (players.length >= 10) return

    const usedColors = players.map((p) => p.color)
    const randomColor = getRandomAvailableColor(usedColors)

    const newPlayer = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: `${t('use-players.players-name')} ${players.length + 1}`,
      color: randomColor
    } as LobbyPlayer
    setPlayers([...players, newPlayer])
  }

  const handleRemovePlayer = (id: string) => () => {
    setPlayers(players.filter((p) => p.id !== id))
  }

  const handleRenamePlayer = (id: string, newName: string) => {
    const playerObject = players.map((p) =>
      p.id === id ? { ...p, name: newName } : p
    )
    setPlayers(playerObject)
  }

  const recordPlayers = () => {
    const rolesArray = shuffleArray(getRoles(players.length))

    initiateGame(
      players.map((p: LobbyPlayer, index: number) => ({
        ...p,
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
