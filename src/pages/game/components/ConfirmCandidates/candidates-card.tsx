import clsx from 'clsx'
import { Crown, Landmark } from 'lucide-react'

import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

const CandidatesCard = () => {
  const { players, candidatePresident, candidateChancellor } =
    useGameStore.getState()

  const presidentObj = players.find((p) => p.id === candidatePresident)
  const chancellorObj = players.find((p) => p.id === candidateChancellor)

  const candidates = {
    president: presidentObj,
    chancellor: chancellorObj
  }

  return (
    <div className="flex w-full max-w-96 flex-col gap-8 rounded-2xl border-2 border-stone-300 p-5 py-8 shadow-xl">
      <div className="mx-auto flex items-center gap-5">
        <Crown
          strokeWidth={2.5}
          size={48}
          className={
            playerTextColorClasses[candidates.president?.color ?? 'slate']
          }
        />
        <div className="flex flex-col">
          <span
            className={clsx(
              playerTextColorClasses[candidates.president?.color ?? 'slate'],
              'text-4xl font-semibold'
            )}
          >
            {candidates.president?.name}
          </span>
          <span className="text-xl text-stone-600">as president</span>
        </div>
      </div>

      <hr className="w-full border border-stone-200" />

      <div className="mx-auto flex items-center gap-5">
        <Landmark
          strokeWidth={2.5}
          size={48}
          className={
            playerTextColorClasses[candidates.chancellor?.color ?? 'slate']
          }
        />
        <div className="flex flex-col">
          <span
            className={clsx(
              playerTextColorClasses[candidates.chancellor?.color ?? 'slate'],
              'text-4xl font-semibold'
            )}
          >
            {candidates.chancellor?.name}
          </span>
          <span className="text-xl text-stone-600">as chancellor</span>
        </div>
      </div>
    </div>
  )
}

export default CandidatesCard
