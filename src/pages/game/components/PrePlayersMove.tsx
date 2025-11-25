import { Button } from '@ui/button'
import { Eye } from 'lucide-react'

import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

export default function PrePlayersMove({
  role
}: {
  role: 'president' | 'chancellor'
}) {
  const { players, president, chancellor, updateStatus } =
    useGameStore.getState()

  const currentPlayer =
    role === 'president'
      ? players.find((player) => player.id === president)
      : players.find((player) => player.id === chancellor)

  const handleNext = () => {
    updateStatus(role === 'president' ? 'president-move' : 'chancellor-move')
  }

  return (
    <>
      <main className="page-main h-full pb-35">
        <div className="my-auto flex flex-col gap-4 text-center">
          <h1
            className={playerTextColorClasses[currentPlayer?.color ?? 'slate']}
          >
            {currentPlayer?.name} 's
          </h1>
          <h3>move</h3>
        </div>
      </main>

      <footer className="fixed-bottom">
        <div className="mx-auto flex justify-between">
          <Eye size={32} className="flex-2 text-stone-500" />
          <span className="body-2 max-w-[84%]">
            Make sure, nobody looks in your screen before you press ‘Next’.
          </span>
        </div>

        <Button size="mobile" onClick={handleNext}>
          Next
        </Button>
      </footer>
    </>
  )
}
