import { useTranslation } from 'react-i18next'

import PlayerListItem from '@/components/PlayerListItem'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import arraySplitter from '@/utils/array-splitter'

import KillDialog from './kill-dialog'

export default function Execution() {
  const { t } = useTranslation()
  const {
    players,
    president,
    setNewCandidatePresident,
    updateStatus,
    killPlayer
  } = useGameStore.getState()

  const [presidentData, playersList] = arraySplitter(players, president)

  return (
    <main className="page-main max-sm:standalone:pb-10 gap-8 pb-5">
      <div className="text-con">
        <h1 className={playerTextColorClasses[presidentData?.color ?? 'slate']}>
          {presidentData?.name}
        </h1>
        <p className="body-2">{t('execution.description')}</p>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <h4>{t('execution.choose-player')}</h4>
        <div className="flex w-full flex-col gap-3">
          {playersList.map((p) => (
            <KillDialog
              key={p.id}
              triggerComp={<PlayerListItem key={p.id} {...p} />}
              onKill={() => {
                setNewCandidatePresident()
                updateStatus('choose-cancelour')
                killPlayer(p.id)
              }}
              {...p}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
