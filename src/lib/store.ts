import { create } from 'zustand'

import type { Player } from '@/types/player'

type Store = {
  players: Player[]
  president: Player['id'] | undefined
  status: 'new-game' | 'role-revealing' | 'sleep-stage' | 'choose-cancelour'
}

type Actions = {
  addPlayers: (players: Player[]) => void
  resetPlayers: () => void
  updateStatus: (status: Store['status']) => void
  initiatePresident: () => void
  abortGame: () => void
}

const useGameStore = create<Store & Actions>((set) => ({
  players: [],
  president: undefined,
  status: 'new-game',

  addPlayers: (players) =>
    set((state) => ({ players: [...state.players, ...players] })),
  resetPlayers: () => set({ players: [] }),
  updateStatus: (status) => set({ status }),
  abortGame: () => set({ players: [], status: 'new-game' }),
  initiatePresident: () =>
    set((state) => {
      if (state.players.length === 0) return state

      return {
        ...state,
        president: state.players[0].id
      }
    })
}))

export default useGameStore
