import clsx from 'clsx'
import { Ban } from 'lucide-react'

import { playerBackgroundColorClasses } from '@/styles/color-classes'
import type { LobbyPlayer } from '@/types/player'

interface PlayerListItemProps extends LobbyPlayer {
  disabled?: boolean
  actionFn: () => void | undefined
}

export default function PlayerListItem({
  name,
  color,
  disabled = false,
  actionFn
}: PlayerListItemProps) {
  return (
    <div
      onClick={disabled ? undefined : actionFn}
      className={clsx(
        disabled
          ? 'cursor-not-allowed border-stone-200 bg-stone-200'
          : 'cursor-pointer border-stone-400 bg-stone-50 hover:bg-stone-100 active:bg-stone-200',
        'flex items-center gap-3 rounded-3xl border-2 p-5 select-none'
      )}
    >
      {disabled ? (
        <Ban strokeWidth={2.5} className="text-stone-500" />
      ) : (
        <div
          className={clsx(
            playerBackgroundColorClasses[color],
            'h-4 w-4 rounded-full'
          )}
        />
      )}

      <div
        className={clsx(
          disabled ? 'text-2xl text-wrap text-stone-500' : 'body-1',
          'flex flex-1 flex-col truncate sm:max-w-64 md:max-w-96'
        )}
      >
        <p>{name}</p>
        {disabled && <p className="body-2">Was elected in previous round</p>}
      </div>
    </div>
  )
}
