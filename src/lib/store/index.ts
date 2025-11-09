import { create } from 'zustand'

import shuffleArray from '@/utils/shuffle-array'

import type { Actions } from './actions'
import { initialState, type Store } from './store'

const useGameStore = create<Store & Actions>((set, get) => ({
  ...initialState,

  // Player management actions
  killPlayer: (playerId) => {
    const { players, killedPlayers, updateStatus, setVictoryDetails } = get()

    const killedPlayerObj = players.find((player) => player.id === playerId)
    if (!killedPlayerObj) return

    set({
      players: players.filter((p) => p.id !== playerId),
      killedPlayers: [...killedPlayers, killedPlayerObj]
    })

    if (killedPlayerObj.role === 'hitler') {
      updateStatus('victory')
      setVictoryDetails({
        whoWon: 'liberals',
        whatHappened: 'Hitler was killed'
      })
    }
  },
  setIneligblePlayers: () => {
    const { president, chancellor, players } = get()

    if (chancellor === undefined || president === undefined) return

    if (players.length <= 5) {
      set({
        ineligiblePlayers: [chancellor]
      })
    } else {
      set({
        ineligiblePlayers: [chancellor, president]
      })
    }
  },
  clearIneligiblePlayers: () => {
    set({
      ineligiblePlayers: []
    })
  },

  // Game state management actions
  abortGame: () => set({ ...initialState }),
  initiateGame: (players) => {
    set((state) => ({
      players: [...state.players, ...players],
      candidatePresident: players[0].id
    }))
  },

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
  //TODO
  handleChaos: () => {
    const { policyTiles, setPolicy, clearIneligiblePlayers } = get()

    setPolicy(policyTiles[0])
    clearIneligiblePlayers()
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
      candidatePresident,
      updateStatus,
      setVictoryDetails
    } = get()

    set({
      president: candidatePresident,
      chancellor: candidateChancellor
    })

    const getChancellorProps = players.find(
      (player) => player.id === candidateChancellor
    )
    if (!getChancellorProps) return

    if (fascistPolicy >= 3 && getChancellorProps.role === 'hitler') {
      updateStatus('victory')
      setVictoryDetails({
        whoWon: 'fascists',
        whatHappened:
          'Hitler was enacted as a chancellor after 3 Fascist Policies'
      })
    }
  },
  setTilesSnapshot: () => {
    set((state) => ({
      tilesSnapshot: state.policyTiles.slice(0, 3)
    }))
  },
  discardTile: (tileId) => {
    const { policyTiles, tilesSnapshot, discartedTiles } = get()

    const tileToDiscard = policyTiles.find((tile) => tile.id === tileId)
    if (!tileToDiscard) return

    set({
      policyTiles: policyTiles.filter((tile) => tile.id !== tileId),
      tilesSnapshot: tilesSnapshot?.map((tile) =>
        tile.id === tileId ? { ...tile, disabled: true } : tile
      ),
      discartedTiles: [...discartedTiles, tileToDiscard]
    })
  },
  checkTiles: () => {
    const { policyTiles, discartedTiles } = get()

    if (policyTiles.length < 3) {
      set({
        policyTiles: shuffleArray([...policyTiles, ...discartedTiles])
      })
    }
  },
  setPolicy: (obj) => {
    const {
      policyTiles,
      fascistPolicy,
      liberalPolicy,
      updateStatus,
      setVictoryDetails
    } = get()

    if (obj.type === 'fascist') {
      const newCount = fascistPolicy + 1

      set({ fascistPolicy: newCount })

      if (newCount >= 6) {
        updateStatus('victory')
        setVictoryDetails({
          whoWon: 'fascists',
          whatHappened: '6 Fascist Policies have been enacted'
        })
      }
    } else if (obj.type === 'liberal') {
      const newCount = liberalPolicy + 1

      set({ liberalPolicy: newCount })

      if (newCount >= 5) {
        updateStatus('victory')
        setVictoryDetails({
          whoWon: 'liberals',
          whatHappened: '5 Liberal Policies have been enacted'
        })
      }
    }

    set({
      policyTiles: policyTiles.filter((tile) => tile.id !== obj.id)
    })
  }
}))

export default useGameStore
