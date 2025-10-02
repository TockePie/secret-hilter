import { PLAYER_CONFIG } from '@/common/constants'
import type { Player } from '@/types/player'

const getRoles = (playerCount: number): Player['role'][] => {
  const config = PLAYER_CONFIG[playerCount as keyof typeof PLAYER_CONFIG]!

  return [
    ...Array(config.liberals).fill('liberal'),
    ...Array(config.fascists).fill('fascist'),
    ...Array(config.hitler).fill('hitler')
  ]
}

export default getRoles
