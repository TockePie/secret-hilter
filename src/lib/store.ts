import { create } from 'zustand'

import { POLICY_TILES } from '@/common/constants'
import type { Player } from '@/types/player'
import type { PolicyTilesType } from '@/types/policy-tiles'
import shuffleArray from '@/utils/shuffle-array'

export type Store = {
  players: Player[]
  president: Player['id'] | undefined
  chancelour: Player['id'] | undefined
  candidatePresident: Player['id'] | undefined
  candidateChancellor: Player['id'] | undefined
  status:
    | 'new-game'
    | 'role-revealing'
    | 'sleep-stage'
    | 'choose-cancelour'
    | 'confirm-candidates'
    | 'prepresident-move'
  electionTracker: number
  ineligiblePlayers: Player['id'][]
  policyTiles: {
    id: number
    type: PolicyTilesType
  }[]
}

export type Actions = {
  abortGame: () => void
  addPlayers: (players: Player[]) => void
  resetPlayers: () => void
  updateStatus: (status: Store['status']) => void
  initiatePresident: () => void
  setCandidateChancellor: (id: Player['id']) => void
  setNewGovernment: () => void
  setNewCandidatePresident: () => void
  setElectionTracker: () => void
}

const useGameStore = create<Store & Actions>((set) => ({
  players: [],
  status: 'new-game',
  president: undefined,
  chancelour: undefined,
  candidatePresident: undefined,
  candidateChancellor: undefined,
  electionTracker: 0,
  ineligiblePlayers: [],
  policyTiles: shuffleArray(POLICY_TILES),
  fascistPolicy: 0,
  liberalPolicy: 0,

  abortGame: () => set({ players: [], status: 'new-game' }),
  addPlayers: (players) =>
    set((state) => ({ players: [...state.players, ...players] })),
  resetPlayers: () => set({ players: [] }),
  updateStatus: (status) => set({ status }),
  initiatePresident: () => {
    set((state) => {
      if (state.players.length === 0) return state

      return {
        ...state,
        candidatePresident: state.players[0].id
      }
    })
  },
  setCandidateChancellor: (playerId) => {
    set(() => ({ candidateChancellor: playerId }))
  },
  setNewGovernment: () => {
    set((state) => ({
      ...state,
      president: state.candidatePresident,
      chancelour: state.candidateChancellor
    }))
  },
  setNewCandidatePresident: () => {
    set((state) => {
      const index = state.players.findIndex(
        (player) => player.id === state.candidatePresident
      )

      if (index === -1) return null

      const newCandidate = state.players[(index + 1) % state.players.length].id

      return {
        ...state,
        candidatePresident: newCandidate
      }
    })
  },
  setElectionTracker: () => {
    set((state) => {
      if (state.electionTracker >= 3) {
        return {
          ...state,
          electionTracker: 0
        }
      }

      return {
        ...state,
        electionTracker: state.electionTracker + 1
      }
    })
  }
}))

export default useGameStore
