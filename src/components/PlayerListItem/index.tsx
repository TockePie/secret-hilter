import { useTranslation } from 'react-i18next'
import { Ban } from 'lucide-react'

import { cn } from '@/lib/utils'
import { playerBackgroundColorClasses } from '@/styles/color-classes'
import type { LobbyPlayer } from '@/types/player'

interface PlayerListItemProps extends LobbyPlayer {
  disabled?: boolean
  actionFn?: () => void
}

export default function PlayerListItem({
  name,
  color,
  disabled = false,
  actionFn
}: PlayerListItemProps) {
  const { t } = useTranslation()

  const titleContainer = cn(
    disabled ? 'text-2xl text-wrap text-stone-500' : 'body-1',
    'flex flex-1 flex-col truncate text-left sm:max-w-64 md:max-w-96'
  )

  return (
    <button
      onClick={disabled ? undefined : actionFn}
      className={cn(
        'flex w-full items-center gap-3 rounded-2xl border-2 p-5 transition-all select-none focus:outline-emerald-800',
        disabled
          ? 'cursor-not-allowed border-stone-200 bg-stone-200'
          : 'cursor-pointer border-stone-400 bg-stone-50 hover:bg-stone-100 active:bg-stone-200'
      )}
    >
      {disabled ? (
        <Ban strokeWidth={2.5} className="text-stone-500" />
      ) : (
        <div
          className={cn(
            playerBackgroundColorClasses[color],
            'size-4 rounded-full'
          )}
        />
      )}

      <div className={titleContainer}>
        <p>{name}</p>
        {disabled && <p className="body-2">{t('player-list-item.disabled')}</p>}
      </div>
    </button>
  )
}
