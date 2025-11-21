import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'

import PlayerListItem from './player-list-item'

export default function ChooseCancelourPage() {
  const {
    players,
    candidatePresident,
    ineligiblePlayers,
    setCandidateChancellor,
    updateStatus
  } = useGameStore.getState()

  const noPresidentPlayers = players.filter(
    (player) => player.id !== candidatePresident
  )

  const presidentData = players.find(
    (player) => player.id === candidatePresident
  )

  const handleCandidates = (id: Player['id']) => () => {
    setCandidateChancellor(id)
    updateStatus('confirm-candidates')
  }

  return (
    <main className="page-main max-sm:standalone:pb-10 gap-8">
      <div className="text-con">
        <h1 className={playerTextColorClasses[presidentData?.color ?? 'slate']}>
          {presidentData?.name}
        </h1>
        <p className="body-2">is a president candidate</p>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <h4>Choose a cancelour</h4>
        <div className="flex w-full flex-col gap-3">
          {noPresidentPlayers.map((player) => (
            <PlayerListItem
              id={player.id}
              name={player.name}
              color={player.color}
              key={player.id}
              disabled={ineligiblePlayers.some((item) => item === player.id)}
              actionFn={handleCandidates(player.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
