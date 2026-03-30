import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'

import InstructionCard from '@/components/InstructionCard'
import useGameStore from '@/lib/store'

export default function SleepStagePage() {
  const { t } = useTranslation()
  const { players, updateStatus } = useGameStore.getState()

  const content = Object.entries(
    t(
      `sleep-stage-page.instruction.${players.length >= 7 ? 'big-team' : 'small-team'}`,
      { returnObjects: true }
    )
  )

  return (
    <>
      <main className="page-main gap-6 pb-35">
        <span className="text-8xl">😴</span>
        <h4>{t('sleep-stage-page.title')}</h4>
        <div className="space-y-5">
          {content.map(([key, stage]) => (
            <InstructionCard
              number={Number(key)}
              key={key}
              title={stage.title}
              content={stage.content}
            />
          ))}
        </div>
      </main>

      <footer className="fixed-bottom">
        <Button size="mobile" onClick={() => updateStatus('choose-cancelour')}>
          {t('continue-btn')}
        </Button>
      </footer>
    </>
  )
}
