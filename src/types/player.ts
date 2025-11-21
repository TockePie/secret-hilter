import type { PlayerColor } from './enums/player-color'

export interface LobbyPlayer {
  id: `${number}-${number}`
  name: string
  color: PlayerColor
}

export interface Player extends LobbyPlayer {
  role: 'liberal' | 'fascist' | 'hitler'
}
