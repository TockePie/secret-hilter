import PlayerColor from '@/types/enums/player-color'

interface LobbyPlayer {
  id: `${number}-${number}`
  name: string
  color: PlayerColor
}

interface Player extends LobbyPlayer {
  role: 'liberal' | 'fascist' | 'hitler'
}

export type { LobbyPlayer, Player }
