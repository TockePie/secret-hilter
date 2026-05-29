import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { GAME_MODE, POLICY_TILES } from '@/common/constants'
import arraySplitter from '@/utils/array-splitter'
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

        const [victim, updatedPlayers] = arraySplitter(players, playerId)
        if (!victim) return

        set({
          players: updatedPlayers,
          killedPlayers: [...killedPlayers, victim]
        })

        if (victim.role === 'hitler') {
          updateStatus('victory')
          setVictoryDetails({
            whoWon: 'liberals',
            whatHappened: 'hitler-killed'
          })
        }
      },
      setIneligiblePlayers: () => {
        const { president, chancellor, players } = get()
        if (!chancellor || !president) return

        const ineligible =
          players.length <= 5 ? [chancellor] : [chancellor, president]

        set({ ineligiblePlayers: ineligible })
      },
      clearIneligiblePlayers: () => {
        set({
          ineligiblePlayers: []
        })
      },
      setInvestigatedPlayers: (playerId) => {
        set((state) => ({
          investigatedPlayers: [...state.investigatedPlayers, playerId]
        }))
      },

      // Game state management actions
      abortGame: () => {
        sessionStorage.removeItem('game-storage')
        useGameStore.persist.clearStorage()
      },
      initiateGame: (players) => {
        const mode = GAME_MODE[players.length]
        if (!mode) return

        set({
          ...initialState,
          players,
          rotation: players.map((p) => p.id),
          rotationIndex: 0,
          candidatePresident: players[0].id,
          policyTiles: shuffleArray(POLICY_TILES),
          mode
        })
      },

      updateStatus: (status) => set({ status }),
      //XXX: Used for controlling state, remove on prod
      // updateStatus: (status) => {
      //   const states = get()

      //   console.log(states)

      //   set({ status })
      // },
      increaseElectionTracker: () => {
        set((state) => ({
          electionTracker: (state.electionTracker + 1) % 4
        }))
      },
      clearElectionTracker: () => {
        set({
          electionTracker: 0
        })
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
        const { players, rotation, rotationIndex, forcedCandidate } = get()
        if (rotation.length === 0) return

        if (forcedCandidate) {
          set({
            candidatePresident: forcedCandidate,
            forcedCandidate: undefined
          })
          return
        }

        const searchOrder = [
          ...rotation.slice(rotationIndex + 1),
          ...rotation.slice(0, rotationIndex + 1)
        ]

        const nextLivingId = searchOrder.find((id) =>
          players.some((p) => p.id === id)
        )

        if (nextLivingId) {
          set({
            candidatePresident: nextLivingId,
            rotationIndex: rotation.indexOf(nextLivingId)
          })
        }
      },
      setCandidateChancellor: (playerId) => {
        set({ candidateChancellor: playerId })
      },
      setSpecialCandidate: (playerId) => {
        const { candidatePresident } = get()

        set({
          forcedCandidate: candidatePresident,
          candidatePresident: playerId
        })
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
          (p) => p.id === candidateChancellor
        )
        if (!getChancellorProps) return

        if (fascistPolicy >= 3 && getChancellorProps.role === 'hitler') {
          updateStatus('victory')
          setVictoryDetails({
            whoWon: 'fascists',
            whatHappened: '3-policies'
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
        const tile = policyTiles.find((t) => t.id === tileId)
        if (!tile || !tilesSnapshot.length) return

        set({
          policyTiles: policyTiles.filter((t) => t.id !== tileId),
          tilesSnapshot: tilesSnapshot.map((t) =>
            t.id === tileId ? { ...t, disabled: true } : t
          ),
          discartedTiles: [...discartedTiles, tile]
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
              whatHappened: '6-fascist-policies'
            })
          }
        } else if (obj.type === 'liberal') {
          const newCount = liberalPolicy + 1

          set({ liberalPolicy: newCount })

          if (newCount >= 5) {
            updateStatus('victory')
            setVictoryDetails({
              whoWon: 'liberals',
              whatHappened: '5-liberal-policies'
            })
          }
        }

        set({
          policyTiles: policyTiles.filter((t) => t.id !== obj.id)
        })
      },

      setUIState: (updater) => {
        set((state) => ({
          uiState: {
            ...state.uiState,
            ...(typeof updater === 'function'
              ? updater(state.uiState)
              : updater)
          }
        }))
      }
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)

export default useGameStore
