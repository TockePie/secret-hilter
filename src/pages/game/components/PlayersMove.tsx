import { Button } from '@ui/button'
import clsx from 'clsx'
import { Eye } from 'lucide-react'

import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

export default function PlayersMove({
  role
}: {
  role: 'president' | 'chancellor'
}) {
  const { players, president, chancellor } = useGameStore.getState()

  const currentPlayer =
    role === 'president'
      ? players.find((player) => player.id === president)
      : players.find((player) => player.id === chancellor)

  return (
    <main className="flex h-[95%] w-full flex-col items-center justify-between gap-4 px-6">
      <p className="my-auto flex flex-col gap-4 text-center">
        <span
          className={clsx(
            'text-5xl font-bold',
            playerTextColorClasses[currentPlayer?.color ?? 'slate']
          )}
        >
          {currentPlayer?.name} 's
        </span>
        <span className="text-3xl">move</span>
      </p>

      <div className="max-sm:standalone:pb-10 flex w-full flex-col gap-3 pb-6">
        <div className="mx-auto flex justify-between">
          <Eye size={32} className="flex-2 text-stone-500" />
          <span className="max-w-[84%] text-xl text-stone-500">
            Make sure, nobody looks in your screen before you press ‘Next’.
          </span>
        </div>

        <Button size="mobile">Next</Button>
      </div>
    </main>
  )
}
