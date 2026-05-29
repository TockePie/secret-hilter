import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'

import useGameStore from '@/lib/store'

import CandidatesCard from './candidates-card'
import ElectionAlert from './election-alert'

export default function ConfirmCandidates() {
  const { t } = useTranslation()
  const {
    players,
    candidatePresident,
    candidateChancellor,
    electionTracker,
    checkTiles,
    setNewGovernment,
    setNewCandidatePresident,
    setCandidateChancellor,
    setTilesSnapshot,
    updateStatus,
    increaseElectionTracker
  } = useGameStore.getState()

  const handleYes = () => {
    checkTiles()
    setTilesSnapshot()
    updateStatus('prepresident-move')
    setNewGovernment()
    setCandidateChancellor(undefined)
  }

  const handleNo = () => {
    if (electionTracker === 2) {
      increaseElectionTracker()
      setCandidateChancellor(undefined)
      setNewCandidatePresident()
      updateStatus('chaos')
      return
    }

    increaseElectionTracker()
    setCandidateChancellor(undefined)
    setNewCandidatePresident()
    updateStatus('choose-cancelour')
  }

  const presidentObj = players.find((p) => p.id === candidatePresident)
  const chancellorObj = players.find((p) => p.id === candidateChancellor)

  if (!presidentObj || !chancellorObj) {
    return null
  }

  return (
    <main className="page-main h-full justify-between">
      <div className="flex w-full flex-col items-center gap-4">
        <h4>{t('confirm-candidates-page.government')}</h4>
        <CandidatesCard
          presidentData={presidentObj}
          chancellorData={chancellorObj}
        />
      </div>

      <div className="max-sm:standalone:pb-10 flex w-full flex-col gap-3 pb-6 text-center">
        {electionTracker === 2 && <ElectionAlert />}

        <p className="body-2">{t('confirm-candidates-page.question')}</p>

        <div className="flex gap-3">
          <Button size="mobile" className="flex-1" onClick={handleYes}>
            {t('yes-btn')}
          </Button>
          <Button
            size="mobile"
            className="flex-1"
            variant="secondary"
            onClick={handleNo}
          >
            {t('no-btn')}
          </Button>
        </div>
      </div>
    </main>
  )
}
