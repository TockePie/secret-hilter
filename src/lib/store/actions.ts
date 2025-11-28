import type { Player } from '@/types/player'
import type { PolicyTilesProps, TilesSnapshotProps } from '@/types/policy-tiles'

import type { Store, UIState } from './store'

export type Actions = {
  // Player management actions
  killPlayer: (id: Player['id']) => void // Removes a player from an array. If it's hitler - sets a victory
  setIneligiblePlayers: () => void
  clearIneligiblePlayers: () => void
  setInvestigatedPlayers: (id: Player['id']) => void

  // Game state management actions
  abortGame: () => void
  initiateGame: (players: Player[]) => void
  updateStatus: (status: Store['status']) => void
  increaseElectionTracker: () => void
  handleChaos: () => void
  nextRound: (type: TilesSnapshotProps['type']) => void
  setVictoryDetails: (obj: Store['victoryDetails']) => void

  // Government management actions
  setNewCandidatePresident: () => void
  setCandidateChancellor: (id: Store['candidateChancellor']) => void
  setNewGovernment: () => void // Sets new president and chancellor. If 3 fascist policy is enacted and hitler is chosen as a chancellor - sets a victory
  setTilesSnapshot: () => void
  discardTile: (tileId: PolicyTilesProps['id']) => void
  checkTiles: () => void
  setPolicy: (obj: PolicyTilesProps) => void // Checks if there are enought tiles to win; if so - sets a victory. Then, sets new policy and moves to discartedTiles

  setUIState: (
    updater: Partial<UIState> | ((prev: UIState) => Partial<UIState>)
  ) => void
}
