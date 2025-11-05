import type { Player } from '@/types/player'
import type { PolicyTilesProps } from '@/types/policy-tiles'

import type { Store } from './store'

export type Actions = {
  // Player management actions
  killPlayer: (id: Player['id']) => void // Removes a player from an array. If it's hitler - sets a victory
  setIneligblePlayers: () => void

  // Game state management actions
  abortGame: () => void
  initiateGame: (players: Player[]) => void
  updateStatus: (status: Store['status']) => void
  increaseElectionTracker: () => void
  handleChaos: () => void
  setVictoryDetails: (obj: {
    whoWon: 'liberals' | 'fascists'
    whatHappened: string
  }) => void

  // Government management actions
  setNewCandidatePresident: () => void
  setCandidateChancellor: (id: Player['id']) => void
  setNewGovernment: () => void // Sets new president and chancellor. If 3 fascist policy is enacted and hitler is chosen as a chancellor - sets a victory
  discardTile: (tileId: PolicyTilesProps['id']) => void
  setPolicy: (obj: PolicyTilesProps) => void // Checks if there are enought tiles to win; if so - sets a victory. Then, sets new policy and moves to discartedTiles
}
