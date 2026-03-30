import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'

import InstructionCard from '@/components/InstructionCard'
import TileCard from '@/components/TileCard'
import useGameStore from '@/lib/store'

export default function ChaosPage() {
  const { t } = useTranslation()
  const {
    policyTiles,
    clearIneligiblePlayers,
    clearElectionTracker,
    setPolicy,
    updateStatus
  } = useGameStore.getState()

  const upperTile = policyTiles[0]

  const handleNext = () => {
    setPolicy(upperTile)
    clearIneligiblePlayers()
    clearElectionTracker()
    updateStatus('choose-cancelour')
  }

  return (
    <>
      <main className="page-main gap-8 pb-35">
        <div className="text-con">
          <h1 className="text-red-800">{t('chaos-page.title')}</h1>
          <p className="body-2">{t('chaos-page.description')}</p>
        </div>

        <div className="text-con w-full">
          <InstructionCard number={1} title={t('chaos-page.list.1')} />
          <TileCard {...upperTile} />
        </div>

        <ul className="w-full space-y-6">
          <InstructionCard number={2} title={t('chaos-page.list.2')} />
          <InstructionCard number={3} title={t('chaos-page.list.3')} />
        </ul>
      </main>

      <footer className="fixed-bottom">
        <Button size="mobile" onClick={handleNext}>
          {t('continue-btn')}
        </Button>
      </footer>
    </>
  )
}
