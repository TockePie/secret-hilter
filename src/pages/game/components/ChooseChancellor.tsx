import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import PlayerListItem from '@/components/PlayerListItem'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'
import arraySplitter from '@/utils/array-splitter'

export default function ChooseCancelourPage() {
  const { t } = useTranslation()
  const {
    players,
    candidatePresident,
    ineligiblePlayers,
    setCandidateChancellor,
    updateStatus
  } = useGameStore.getState()

  const [presidentData, playersList] = arraySplitter(
    players,
    candidatePresident
  )

  const handleCandidates = (id: Player['id']) => () => {
    setCandidateChancellor(id)
    updateStatus('confirm-candidates')
  }

  return (
    <main className="page-main max-sm:standalone:pb-10 gap-8 pb-5">
      <div className="text-con">
        <h1
          className={clsx(
            playerTextColorClasses[presidentData?.color ?? 'slate'],
            'w-full max-md:max-w-70'
          )}
        >
          {presidentData?.name}
        </h1>
        <p className="body-2">{t('choose-chancellor-page.player-status')}</p>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <h4>{t('choose-chancellor-page.choose-chancellor')}</h4>
        <div className="flex w-full flex-col gap-3">
          {playersList.map((p) => (
            <PlayerListItem
              key={p.id}
              disabled={ineligiblePlayers.some((item) => item === p.id)}
              actionFn={handleCandidates(p.id)}
              {...p}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
