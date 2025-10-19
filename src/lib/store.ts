import { create } from 'zustand'

import type { Player } from '@/types/player'

type Store = {
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
}

type Actions = {
  addPlayers: (players: Player[]) => void
  resetPlayers: () => void
  abortGame: () => void
  updateStatus: (status: Store['status']) => void
  initiatePresident: () => void
  setCandidateChancellor: (id: Player['id']) => void
}

const useGameStore = create<Store & Actions>((set) => ({
  players: [],
  president: undefined,
  chancelour: undefined,
  candidatePresident: undefined,
  candidateChancellor: undefined,
  status: 'new-game',

  addPlayers: (players) => {
    set((state) => ({ players: [...state.players, ...players] }))
  },
  resetPlayers: () => set({ players: [] }),
  abortGame: () => set({ players: [], status: 'new-game' }),
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
  }
}))

export default useGameStore
