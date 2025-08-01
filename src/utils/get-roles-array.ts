import { ROLE_CONFIG } from '@/common/constants'
import { Player } from '@/types/player'

const getRoles = (playerCount: number): Player['role'][] => {
  const config = ROLE_CONFIG[playerCount as keyof typeof ROLE_CONFIG]!

  return [
    ...Array(config.liberals).fill('liberal'),
    ...Array(config.fascists).fill('fascist'),
    ...Array(config.hitler).fill('hitler')
  ]
}

export default getRoles
