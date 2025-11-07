import { Button } from '@ui/button'

import useGameStore from '@/lib/store'

import CandidatesCard from './candidates-card'
import ElectionAlert from './election-alert'

const ConfirmCandidates = () => {
  const {
    electionTracker,
    handleChaos,
    setNewGovernment,
    setNewCandidatePresident,
    updateStatus,
    increaseElectionTracker
  } = useGameStore.getState()

  const handleYes = () => {
    setNewGovernment()
    updateStatus('prepresident-move')
  }

  const handleNo = () => {
    increaseElectionTracker()
    setNewCandidatePresident()

    if (electionTracker === 2) {
      updateStatus('chaos')
      handleChaos()

      return
    }

    updateStatus('choose-cancelour')
  }

  return (
    <main className="page h-full justify-between">
      <div className="flex w-full flex-col items-center gap-4">
        <h4 className="text-center">The government for the next term:</h4>
        <CandidatesCard />
      </div>

      <div className="max-sm:standalone:pb-10 flex w-full flex-col gap-3 pb-6 text-center">
        {electionTracker === 2 && <ElectionAlert />}

        <p className="body-2">
          Did the majority of players vote to accept new government?
        </p>

        <div className="flex gap-3">
          <Button size="mobile" className="flex-1" onClick={handleYes}>
            Yes
          </Button>
          <Button
            size="mobile"
            className="flex-1"
            variant="secondary"
            onClick={handleNo}
          >
            No
          </Button>
        </div>
      </div>
    </main>
  )
}

export default ConfirmCandidates
