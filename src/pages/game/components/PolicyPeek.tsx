import { useState } from 'react'
import { Button } from '@ui/button'
import { Eye } from 'lucide-react'

import TileCard from '@/components/TileCard'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

export default function PolicyPeek() {
  const [showPolicies, setShowPolicies] = useState(false)
  const { players, president, policyTiles, updateStatus } =
    useGameStore.getState()

  const currentPlayer = players.find((player) => player.id === president)

  return (
    <>
      <main className="page-main h-full pb-40">
        <div className="text-con my-auto h-34">
          <h1
            className={playerTextColorClasses[currentPlayer?.color ?? 'slate']}
          >
            {currentPlayer?.name}
          </h1>
          <h4>must look top 3 policy tiles</h4>
        </div>

        {!showPolicies && (
          <div className="mx-auto flex justify-between">
            <Eye size={32} className="flex-2 text-stone-500" />
            <span className="body-2 max-w-[84%]">
              Make sure, nobody looks in your screen before you press ‘Show’.
            </span>
          </div>
        )}

        <div className="flex w-full flex-col gap-3">
          {policyTiles.slice(0, 3).map((tile) => (
            <TileCard {...tile} state={showPolicies ? 'default' : 'hidden'} />
          ))}
        </div>
      </main>

      <footer className="fixed-bottom">
        {showPolicies ? (
          <Button
            className="max-w-134"
            size="mobile"
            onClick={() => updateStatus('choose-cancelour')}
          >
            Continue
          </Button>
        ) : (
          <Button
            className="max-w-134"
            size="mobile"
            onClick={() => setShowPolicies(true)}
          >
            Show
          </Button>
        )}
      </footer>
    </>
  )
}
