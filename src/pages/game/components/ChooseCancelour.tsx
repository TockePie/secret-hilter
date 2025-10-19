import clsx from 'clsx'

import PlayerListItem from '@/components/PlayerListItem'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'

const ChooseCancelourPage = () => {
  const { players, candidatePresident, setCandidateChancellor, updateStatus } =
    useGameStore.getState()

  const presidentData = players.find(
    (player) => player.id === candidatePresident
  )

  const handleCandidates = (id: Player['id']) => () => {
    setCandidateChancellor(id)
    updateStatus('confirm-candidates')
  }

  return (
    <main className="flex w-full flex-col items-center gap-4 px-6">
      <div className="flex flex-col items-center gap-3">
        <h2
          className={clsx(
            playerTextColorClasses[presidentData?.color],
            'text-5xl font-bold'
          )}
        >
          {presidentData?.name}
        </h2>
        <p className="text-xl text-stone-700">is a president candidate</p>
      </div>

      <p className="text-xl font-medium text-stone-700">Choose a cancelour</p>
      <div className="flex w-full flex-col items-center gap-3">
        {players.map((player) => (
          <PlayerListItem
            id={player.id}
            name={player.name}
            color={player.color}
            key={player.id}
            disabled={player.id === presidentData?.id}
            actionFn={handleCandidates(player.id)}
          />
        ))}
      </div>
    </main>
  )
}

export default ChooseCancelourPage
