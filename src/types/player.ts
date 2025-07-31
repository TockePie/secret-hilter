import PlayerColor from '@/types/enums/player-color'

interface Player {
  id: `${number}-${number}`
  name: string
  color: PlayerColor
}

export type { Player }
