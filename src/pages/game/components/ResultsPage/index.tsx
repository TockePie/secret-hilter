import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import clsx from 'clsx'

import { POWERS } from '@/common/constants'
import MotionWrapper from '@/components/MotionWrapper'
import useGameStore from '@/lib/store'
import type { PolicyTilesProps } from '@/types/policy-tiles'

import PolicyCard from './policy-card'

export default function ResultsPage() {
  const [isContinuing, setIsContinuing] = useState(false)
  const { t } = useTranslation()
  const {
    mode,
    tilesSnapshot,
    setUIState,
    clearIneligiblePlayers,
    setPolicy,
    setIneligiblePlayers,
    setNewCandidatePresident,
    updateStatus
  } = useGameStore.getState()
  const status = useGameStore((state) => state.status)
  const uiState = useGameStore((state) => state.uiState.policyResultsRevealed)

  const policy = tilesSnapshot.find((tile) => !('disabled' in tile))

  const handleShow = () => {
    setUIState({ policyResultsRevealed: true })
  }

  const handleContinue = () => {
    if (isContinuing) return
    setIsContinuing(true)

    clearIneligiblePlayers()
    setIneligiblePlayers()

    const newFascistCount =
      policy?.type === 'fascist'
        ? useGameStore.getState().fascistPolicy + 1
        : useGameStore.getState().fascistPolicy

    const newStatus =
      policy?.type === 'liberal'
        ? 'choose-cancelour'
        : (POWERS[mode!][newFascistCount] ?? 'choose-cancelour')

    updateStatus(newStatus)
    setPolicy(policy as PolicyTilesProps)

    if (status === 'execution') return
    setNewCandidatePresident()

    setTimeout(() => {
      setUIState({ policyResultsRevealed: false })
      setIsContinuing(false)
    }, 1000)
  }

  return (
    <>
      <Button
        className="absolute top-4 left-4"
        onClick={() => setUIState({ policyResultsRevealed: false })}
      >
        Unset
      </Button>
      <main
        className={clsx(
          'page-main h-full pb-35',
          uiState ?? 'mb-3 border border-dashed border-stone-400'
        )}
        onClick={handleShow}
      >
        {uiState ? (
          <MotionWrapper type="bounce-in">
            <PolicyCard policy={policy} />
          </MotionWrapper>
        ) : (
          <h4 className="mt-[30vh] mb-auto">
            {t('results-page.press-screen')}
          </h4>
        )}
      </main>

      {uiState && (
        <footer className="fixed-bottom">
          <MotionWrapper type="fade-in">
            <Button
              className="max-w-134"
              size="mobile"
              disabled={isContinuing}
              onClick={handleContinue}
            >
              {t('continue-btn')}
            </Button>
          </MotionWrapper>
        </footer>
      )}
    </>
  )
}
