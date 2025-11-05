import type { Player } from '@/types/player'
import type { PolicyTilesProps } from '@/types/policy-tiles'

import type { Store } from './store'

export type Actions = {
  // Player management actions
  abortGame: () => void
  addPlayers: (players: Player[]) => void
  resetPlayers: () => void
  killPlayer: (id: Player['id']) => void

  // Game state management actions
  updateStatus: (status: Store['status']) => void
  setVictoryDetails: (obj: {
    whoWon: 'liberals' | 'fascists'
    whatHappened: string
  }) => void

  // Government management actions
  initiatePresident: () => void
  setCandidateChancellor: (id: Player['id']) => void
  setNewGovernment: () => void
  setNewCandidatePresident: () => void
  increaseElectionTracker: () => void
  setPolicy: (obj: PolicyTilesProps) => void
}
