import type React from 'react'
import clsx from 'clsx'

import { playerBackgroundColorClasses } from '@/styles/color-classes'
import type { LobbyPlayer } from '@/types/player'

interface PlayerListItemProps extends LobbyPlayer {
  disabled?: boolean
  actionFn: () => void | undefined
}

const PlayerListItem: React.FC<PlayerListItemProps> = ({
  name,
  color,
  disabled = false,
  actionFn
}) => (
  <div
    onClick={disabled ? undefined : actionFn}
    className={clsx(
      disabled
        ? 'cursor-not-allowed border-stone-200 bg-stone-200'
        : 'cursor-pointer border-stone-400 bg-stone-50 hover:bg-stone-100 active:bg-stone-200',
      'flex items-center gap-3 rounded-3xl border-2 p-5 select-none'
    )}
  >
    <div
      className={clsx(
        playerBackgroundColorClasses[color],
        'h-4 w-4 rounded-full'
      )}
    />

    <p
      className={clsx(
        disabled ? 'text-2xl text-stone-500' : 'body-1',
        'max-w-44 flex-1 truncate sm:max-w-64 md:max-w-96'
      )}
    >
      {name}
    </p>
  </div>
)

export default PlayerListItem
