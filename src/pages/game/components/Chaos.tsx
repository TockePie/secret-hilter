import { Button } from '@ui/button'

import InstructionCard from '@/components/InstructionCard'
import useGameStore from '@/lib/store'

import TileCard from './PlayersMove/tile-card'

export default function ChaosPage() {
  const { policyTiles, handleChaos, updateStatus } = useGameStore.getState()

  const upperTile = policyTiles[0]

  const handleNext = () => {
    handleChaos()
    updateStatus('choose-cancelour')
  }

  return (
    <>
      <main className="page-main gap-8 pb-35">
        <div className="text-con">
          <h1 className="text-red-800">Chaos!</h1>
          <p className="body-2">3 failed elections just reached.</p>
        </div>

        <div className="text-con w-full">
          <InstructionCard
            number={1}
            title="The next policy will be enacted:"
          />
          <TileCard {...upperTile} />
        </div>

        <ul className="flex w-full flex-col gap-6">
          <InstructionCard
            number={2}
            title="Election Tracker will be resetted to 0."
          />
          <InstructionCard number={3} title="Term limits will be cleaned." />
        </ul>
      </main>

      <footer className="fixed-bottom">
        <Button size="mobile" onClick={handleNext}>
          Next
        </Button>
      </footer>
    </>
  )
}
