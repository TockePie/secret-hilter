import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { POLICY_TILES, POWERS } from '@/common/constants'
import shuffleArray from '@/utils/shuffle-array'

import type { Actions } from './actions'
import { initialState, type Store } from './store'

const useGameStore = create<Store & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Player management actions
      killPlayer: (playerId) => {
        const { players, killedPlayers, updateStatus, setVictoryDetails } =
          get()

        const killedPlayerObj = players.find((p) => p.id === playerId)
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
      setIneligiblePlayers: () => {
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
      setInvestigatedPlayers: (id) => {
        set((state) => ({
          investigatedPlayers: [...state.investigatedPlayers, id]
        }))
      },

      // Game state management actions
      abortGame: () => set({ ...initialState }),
      initiateGame: (players) => {
        const count = players.length

        let mode: Store['mode']

        if (count === 5 || count === 6) {
          mode = '5to6'
        } else if (count === 7 || count === 8) {
          mode = '7to8'
        } else if (count === 9 || count === 10) {
          mode = '9to10'
        } else {
          throw new Error(`Invalid player count: ${count}`)
        }

        set((state) => ({
          players: [...state.players, ...players],
          candidatePresident: players[0].id,
          policyTiles: shuffleArray(POLICY_TILES),
          mode
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
      handleChaos: () => {
        const { policyTiles, setPolicy, clearIneligiblePlayers } = get()

        setPolicy(policyTiles[0])
        clearIneligiblePlayers()

        set({
          electionTracker: 0
        })
      },
      nextRound: () => {
        const { mode, fascistPolicy, updateStatus } = get()
        if (!mode) return

        const status = POWERS[mode]?.[fascistPolicy] ?? 'choose-cancelour'
        updateStatus(status)
      },
      setVictoryDetails: (obj) => {
        if (!obj) return

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

        if (tilesSnapshot.length === 0) return

        const tileToDiscard = policyTiles.find((tile) => tile.id === tileId)
        if (!tileToDiscard) return

        set({
          policyTiles: policyTiles.filter((tile) => tile.id !== tileId),
          tilesSnapshot: tilesSnapshot.map((tile) =>
            tile.id === tileId ? { ...tile, disabled: true } : tile
          ),
          discartedTiles: [...discartedTiles, tileToDiscard]
        })
      },
      checkTiles: () => {
        const { policyTiles, discartedTiles } = get()

        if (policyTiles.length < 3) {
          set({
            policyTiles: shuffleArray([...policyTiles, ...discartedTiles]),
            discartedTiles: []
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
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)

export default useGameStore
