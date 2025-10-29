import { type KeyboardEvent, useState } from 'react'
import { Input } from '@ui/input'
import clsx from 'clsx'
import { Pencil, Trash2 } from 'lucide-react'

import { playerBackgroundColorClasses } from '@/styles/color-classes'
import type { LobbyPlayer } from '@/types/player'

interface PlayerCardProps extends LobbyPlayer {
  renameFn: (newName: string) => void
  removeFn: () => void
  addPlayerFn: () => void
}

export default function PlayerCard({
  name,
  color,
  renameFn,
  removeFn,
  addPlayerFn
}: PlayerCardProps) {
  const [isEditing, setIsEditing] = useState(true)

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return

    setIsEditing(false)
    addPlayerFn()
  }

  return (
    <div className="flex w-full items-center justify-between gap-3 rounded-3xl border-2 border-stone-400 bg-stone-50 p-5">
      <div className="flex items-center gap-3">
        <div
          className={clsx(
            playerBackgroundColorClasses[color],
            'h-4 w-4 rounded-full'
          )}
        />

        {isEditing ? (
          <Input
            id={`player-name-${color}`}
            value={name}
            onChange={(e) => renameFn(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={handleEnter}
            className="max-w-fit flex-1 text-2xl text-stone-600 sm:max-w-64 md:max-w-96"
            autoFocus
          />
        ) : (
          <h3 className="max-w-44 flex-1 truncate text-2xl text-stone-600 sm:max-w-64 md:max-w-96">
            {name}
          </h3>
        )}
      </div>

      <div className="flex items-center gap-5">
        {!isEditing && (
          <>
            <Pencil
              className="cursor-pointer text-stone-500 hover:text-stone-700"
              onClick={() => setIsEditing(true)}
            />
            <Trash2
              className="cursor-pointer text-stone-500 hover:text-stone-700"
              onClick={removeFn}
            />
          </>
        )}
      </div>
    </div>
  )
}
