import { useTranslation } from 'react-i18next'

import PlayerListItem from '@/components/PlayerListItem'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import arraySplitter from '@/utils/array-splitter'

import InvestigateDialog from './investigate-dialog'

export default function InvestigateLoyalty() {
  const { t } = useTranslation()
  const {
    players,
    president,
    investigatedPlayers,
    setUIState,
    setInvestigatedPlayers,
    updateStatus
  } = useGameStore.getState()
  const lastInvestigatedPlayer = useGameStore(
    (state) => state.uiState.lastInvestigatedPlayer
  )

  const [presidentData, playersList] = arraySplitter(
    players.filter((p) => !investigatedPlayers.includes(p.id)),
    president
  )

  return (
    <main className="page-main max-sm:standalone:pb-10 gap-8 pb-5">
      <div className="text-con">
        <h1 className={playerTextColorClasses[presidentData?.color ?? 'slate']}>
          {presidentData?.name}
        </h1>
        <p className="body-2">{t('investigate-loyalty.description')}</p>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <h4>{t('investigate-loyalty.choose-player')}</h4>
        <div className="flex w-full flex-col gap-3">
          {playersList.map((p) => (
            <InvestigateDialog
              key={p.id}
              triggerComp={
                <PlayerListItem
                  actionFn={() => {
                    setUIState({ lastInvestigatedPlayer: p.id })
                  }}
                  {...p}
                />
              }
              onInvestigate={() => {
                setInvestigatedPlayers(p.id)
                updateStatus('choose-cancelour')

                setTimeout(() => {
                  setUIState({ lastInvestigatedPlayer: undefined })
                }, 1000)
              }}
              autoOpen={lastInvestigatedPlayer === p.id}
              {...p}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
