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
        ? 'border-stone-300 bg-stone-300'
        : 'border-stone-400 bg-stone-50',
      'flex w-full items-center gap-2 rounded-3xl border-2 p-5'
    )}
  >
    <div
      className={clsx(
        playerBackgroundColorClasses[color],
        'h-4 w-4 rounded-full'
      )}
    />

    <h3 className="max-w-44 flex-1 truncate text-2xl text-stone-600 sm:max-w-64 md:max-w-96">
      {name}
    </h3>
  </div>
)

export default PlayerListItem
