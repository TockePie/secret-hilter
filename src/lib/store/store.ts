import { POLICY_TILES } from '@/common/constants'
import type { Player } from '@/types/player'
import type { PolicyTilesProps, TilesSnapshotProps } from '@/types/policy-tiles'
import shuffleArray from '@/utils/shuffle-array'

export type Store = {
  // Players-related state
  players: Player[]
  ineligiblePlayers: Player['id'][]
  investigatedPlayers: Player['id'][]
  killedPlayers: Player[]
  president: Player['id'] | undefined
  chancellor: Player['id'] | undefined
  candidatePresident: Player['id'] | undefined
  candidateChancellor: Player['id'] | undefined
  candidatePresidentSnapshot: Player['id'] | undefined

  // Game status-related state
  mode: '5to6' | '7to8' | '9to10' | undefined
  status:
    | 'new-game'
    | 'role-revealing'
    | 'sleep-stage'
    | 'choose-cancelour'
    | 'confirm-candidates'
    | 'prepresident-move'
    | 'president-move'
    | 'prechancellor-move'
    | 'chancellor-move'
    | 'results'
    | 'investigate-loyalty'
    | 'special-election'
    | 'policy-peek'
    | 'execution'
    | 'chaos'
    | 'victory'
  electionTracker: number
  victoryDetails: {
    whoWon: 'liberals' | 'fascists'
    whatHappened: string
  } | null

  // Policy tiles-related state
  policyTiles: PolicyTilesProps[]
  tilesSnapshot: TilesSnapshotProps[]
  discartedTiles: PolicyTilesProps[]
  fascistPolicy: number
  liberalPolicy: number

  //UI related-state
  uiState: UIState
}

export type UIState = {
  lastViewedRoleIndex: number | null
  policyResultsRevealed: boolean
  policyPeekRevealed: boolean
  lastInvestigatedPlayer: Player['id'] | undefined
}

export const initialState: Store = {
  // Initializing players state
  players: [],
  ineligiblePlayers: [],
  investigatedPlayers: [],
  killedPlayers: [],
  president: undefined,
  chancellor: undefined,
  candidatePresident: undefined,
  candidateChancellor: undefined,
  candidatePresidentSnapshot: undefined,

  // Initializing game status
  mode: undefined,
  status: 'new-game',
  electionTracker: 0,
  victoryDetails: null,

  // Initializing policy tiles
  policyTiles: shuffleArray(POLICY_TILES),
  tilesSnapshot: [],
  discartedTiles: [],
  fascistPolicy: 0,
  liberalPolicy: 0,

  // Initializing UI state
  uiState: {
    lastViewedRoleIndex: null,
    policyResultsRevealed: false,
    policyPeekRevealed: false,
    lastInvestigatedPlayer: undefined
  }
}
