import { create } from 'zustand'

import type { Player } from '@/types/player'

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
}

export type Actions = {
  addPlayers: (players: Player[]) => void
  resetPlayers: () => void
  updateStatus: (status: Store['status']) => void
  initiatePresident: () => void
  setCandidateChancellor: (id: Player['id']) => void
  setNewGovernment: () => void
}

const useGameStore = create<Store & Actions>((set) => ({
  players: [],
  status: 'new-game',
  president: undefined,
  chancelour: undefined,
  candidatePresident: undefined,
  candidateChancellor: undefined,

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
  }
}))

export default useGameStore
