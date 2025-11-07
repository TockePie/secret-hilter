import { POLICY_TILES } from '@/common/constants'
import type { Player } from '@/types/player'
import type { PolicyTilesProps } from '@/types/policy-tiles'
import shuffleArray from '@/utils/shuffle-array'

export type Store = {
  // Players-related state
  players: Player[]
  ineligiblePlayers: Player['id'][]
  killedPlayers: Player[]
  president: Player['id'] | undefined
  chancellor: Player['id'] | undefined
  candidatePresident: Player['id'] | undefined
  candidateChancellor: Player['id'] | undefined

  // Game status-related state
  status:
    | 'new-game'
    | 'role-revealing'
    | 'sleep-stage'
    | 'choose-cancelour'
    | 'confirm-candidates'
    | 'prepresident-move'
    | 'president-move'
    | 'chaos'
    | 'victory'
  electionTracker: number
  victoryDetails: {
    whoWon: 'liberals' | 'fascists'
    whatHappened: string
  } | null

  // Policy tiles-related state
  policyTiles: PolicyTilesProps[]
  discartedTiles: PolicyTilesProps[]
  fascistPolicy: number
  liberalPolicy: number
}

export const initialState: Store = {
  // Initializing players state
  players: [],
  ineligiblePlayers: [],
  killedPlayers: [],
  president: undefined,
  chancellor: undefined,
  candidatePresident: undefined,
  candidateChancellor: undefined,

  // Initializing game status
  status: 'new-game',
  electionTracker: 0,
  victoryDetails: null,

  // Initializing policy tiles
  policyTiles: shuffleArray(POLICY_TILES),
  discartedTiles: [],
  fascistPolicy: 0,
  liberalPolicy: 0
}
