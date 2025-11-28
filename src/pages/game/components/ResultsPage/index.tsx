import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import clsx from 'clsx'

import useGameStore from '@/lib/store'
import type { PolicyTilesProps } from '@/types/policy-tiles'

import PolicyCard from './policy-card'

export default function ResultsPage() {
  const [showResults, setShowResults] = useState(false)
  const { t } = useTranslation()
  const {
    tilesSnapshot,
    clearIneligiblePlayers,
    setPolicy,
    setIneligiblePlayers,
    setNewCandidatePresident,
    nextRound
  } = useGameStore.getState()

  const policy = tilesSnapshot.find((tile) => !('disabled' in tile))

  const handleShow = () => {
    if (!showResults) {
      setShowResults(true)
    }
  }

  const handleContinue = () => {
    clearIneligiblePlayers()
    setIneligiblePlayers()
    setNewCandidatePresident()
    setPolicy(policy as PolicyTilesProps)
    nextRound(policy?.type ?? 'liberal')
  }

  return (
    <>
      <main
        className={clsx(
          'page-main h-full pb-35',
          showResults ?? 'mb-3 border-dashed border-stone-400 min-md:border'
        )}
        onClick={handleShow}
      >
        {showResults ? (
          <PolicyCard />
        ) : (
          <h4 className="mt-[30vh] mb-auto">
            {t('results-page.press-screen')}
          </h4>
        )}
      </main>

      {showResults && (
        <footer className="fixed-bottom">
          <Button className="max-w-134" size="mobile" onClick={handleContinue}>
            {t('continue-btn')}
          </Button>
        </footer>
      )}
    </>
  )
}
