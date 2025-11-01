import { Button } from '@ui/button'

import useGameStore from '@/lib/store'

import CandidatesCard from './candidates-card'

//TODO: Implement No-button logic
const ConfirmCandidates = () => {
  const { setNewGovernment, updateStatus } = useGameStore.getState()

  const handleYes = () => {
    setNewGovernment()
    updateStatus('prepresident-move')
  }

  return (
    <main className="flex h-full flex-col justify-between px-6">
      <div className="flex w-full flex-col items-center gap-4">
        <p className="text-center text-2xl font-medium">
          The government for the next term:
        </p>

        <CandidatesCard />
      </div>

      <div className="max-sm:standalone:pb-10 flex w-full flex-col gap-3 pb-6">
        <span className="text-center text-2xl text-stone-700">
          Did the majority of players vote to accept new government?
        </span>

        <div className="flex gap-3">
          <Button size="mobile" className="flex-1" onClick={handleYes}>
            Yes
          </Button>
          <Button size="mobile" className="flex-1" variant="secondary">
            No
          </Button>
        </div>
      </div>
    </main>
  )
}

export default ConfirmCandidates
