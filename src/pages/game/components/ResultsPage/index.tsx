import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import clsx from 'clsx'

import useGameStore from '@/lib/store'
import type { PolicyTilesProps } from '@/types/policy-tiles'

import PolicyCard from './policy-card'

export default function ResultsPage() {
  const { t } = useTranslation()
  const {
    tilesSnapshot,
    setUIState,
    clearIneligiblePlayers,
    setPolicy,
    setIneligiblePlayers,
    setNewCandidatePresident,
    nextRound
  } = useGameStore.getState()
  const status = useGameStore((state) => state.status)
  const uiState = useGameStore((state) => state.uiState.policyResultsRevealed)

  const policy = tilesSnapshot.find((tile) => !('disabled' in tile))

  const handleShow = () => {
    setUIState({ policyResultsRevealed: true })
  }

  const handleContinue = () => {
    clearIneligiblePlayers()
    setIneligiblePlayers()
    setPolicy(policy as PolicyTilesProps)
    nextRound(policy?.type ?? 'liberal')

    if (status === 'execution') return
    setNewCandidatePresident()

    setTimeout(() => {
      setUIState({ policyResultsRevealed: false })
    }, 1000)
  }

  return (
    <>
      <main
        className={clsx(
          'page-main h-full pb-35',
          uiState ?? 'mb-3 border-dashed border-stone-400 min-md:border'
        )}
        onClick={handleShow}
      >
        {uiState ? (
          <PolicyCard policy={policy} />
        ) : (
          <h4 className="mt-[30vh] mb-auto">
            {t('results-page.press-screen')}
          </h4>
        )}
      </main>

      {uiState && (
        <footer className="fixed-bottom">
          <Button className="max-w-134" size="mobile" onClick={handleContinue}>
            {t('continue-btn')}
          </Button>
        </footer>
      )}
    </>
  )
}
