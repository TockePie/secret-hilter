import { create } from 'zustand'

import type { Actions } from './actions'
import { initialState, type Store } from './store'

const useGameStore = create<Store & Actions>((set, get) => ({
  ...initialState,

  // Player management actions
  abortGame: () => set({ ...initialState }),
  addPlayers: (players) =>
    set((state) => ({ players: [...state.players, ...players] })),
  resetPlayers: () => set({ players: [] }),
  killPlayer: (playerId) => {
    const { players, updateStatus, setVictoryDetails } = get()

    const killedPlayerObj = players.find((player) => player.id === playerId)
    if (!killedPlayerObj) return

    if (killedPlayerObj.role === 'hitler') {
      updateStatus('victory')
      setVictoryDetails({
        whoWon: 'liberals',
        whatHappened: 'Hitler was killed'
      })
      return
    }

    set({
      players: players.filter((p) => p.id !== playerId),
      killedPlayers: [...get().killedPlayers, killedPlayerObj]
    })
  },

  // Game state management actions

  // updateStatus: (status) => set({ status }),
  //XXX: Used for controllig state, remove on prod
  updateStatus: (status) => {
    const states = get()

    console.log(states)

    set({ status })
  },
  increaseElectionTracker: () => {
    set((state) => ({
      electionTracker: (state.electionTracker + 1) % 4
    }))
  },
  setVictoryDetails: (obj) => {
    set({
      victoryDetails: {
        whoWon: obj.whoWon,
        whatHappened: obj.whatHappened
      }
    })
  },

  // Government management actions
  initiatePresident: () => {
    const { players } = get()

    if (players.length === 0) return

    set({
      candidatePresident: players[0].id
    })
  },
  setNewCandidatePresident: () => {
    const { players, candidatePresident } = get()

    if (players.length === 0) return

    const index = players.findIndex(
      (player) => player.id === candidatePresident
    )

    if (index === -1) return

    const newCandidate = players[(index + 1) % players.length].id

    set({
      candidatePresident: newCandidate
    })
  },
  setCandidateChancellor: (playerId) => {
    set({ candidateChancellor: playerId })
  },
  setNewGovernment: () => {
    const {
      players,
      fascistPolicy,
      candidateChancellor,
      updateStatus,
      setVictoryDetails
    } = get()

    const getChancellorProps = players.find(
      (player) => player.id === candidateChancellor
    )

    if (fascistPolicy >= 3 && getChancellorProps?.role === 'hitler') {
      updateStatus('victory')
      setVictoryDetails({
        whoWon: 'fascists',
        whatHappened:
          'Hitler was enacted as a chancellor after 3 Fascist Policies'
      })

      return
    }

    set((state) => ({
      president: state.candidatePresident,
      chancellor: state.candidateChancellor
    }))
  },
  setPolicy: ({ type }) => {
    const { fascistPolicy, liberalPolicy, updateStatus, setVictoryDetails } =
      get()

    if (type === 'fascist') {
      const newCount = fascistPolicy + 1

      if (newCount >= 6) {
        updateStatus('victory')
        setVictoryDetails({
          whoWon: 'fascists',
          whatHappened: '6 Fascist Policies have been enacted'
        })
        return
      }

      set({ fascistPolicy: newCount })
    } else if (type === 'liberal') {
      const newCount = liberalPolicy + 1

      if (newCount >= 5) {
        updateStatus('victory')
        setVictoryDetails({
          whoWon: 'liberals',
          whatHappened: '5 Liberal Policies have been enacted'
        })
        return
      }

      set({ liberalPolicy: newCount })
    }
  }
}))

export default useGameStore
