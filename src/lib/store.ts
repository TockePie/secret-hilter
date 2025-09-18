import { create } from 'zustand'

import { Player } from '@/types/player'

type Store = {
  players: Player[]
  status: 'new-game' | 'role-revealing' | 'sleep-stage'
}

type Actions = {
  addPlayers: (players: Player[]) => void
  resetPlayers: () => void
  updateStatus: (status: Store['status']) => void
}

const useGameStore = create<Store & Actions>((set) => ({
  players: [],
  status: 'new-game',
  addPlayers: (players) =>
    set((state) => ({ players: [...state.players, ...players] })),
  resetPlayers: () => set({ players: [] }),
  updateStatus: (status) => set({ status })
}))

export default useGameStore
