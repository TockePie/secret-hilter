import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import PlayerListItem from '@/components/PlayerListItem'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import arraySplitter from '@/utils/array-splitter'

export default function SpecialElection() {
  const { t } = useTranslation()
  const { players, president } = useGameStore.getState()

  const [currentPresident, allPlayers] = arraySplitter(players, president)

  return (
    <main className="page-main max-sm:standalone:pb-10 gap-8 pb-5">
      <div className="text-con">
        <h1
          className={clsx(
            playerTextColorClasses[currentPresident?.color ?? 'slate'],
            'w-full max-md:max-w-56'
          )}
        >
          {currentPresident?.name}
        </h1>
        <p className="body-2">{t('special-election.description')}</p>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <h4>{t('special-election.choose-player')}</h4>
        <div className="flex w-full flex-col gap-3">
          {allPlayers.map((p) => (
            <PlayerListItem key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  )
}
