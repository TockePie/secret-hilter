import { useState } from 'react'
import { Input } from '@ui/input'
import { cx } from 'class-variance-authority'
import { Trash2 } from 'lucide-react'

import { playerBackgroundColorClasses } from '@/styles/color-classes'
import type { LobbyPlayer } from '@/types/player'

interface Props extends LobbyPlayer {
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
}: Props) {
  const [isEditing, setIsEditing] = useState(true)
  const [tempName, setTempName] = useState(name)

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      renameFn(tempName)
      setIsEditing(false)
      addPlayerFn()
    }

    if (event.key === 'Escape') {
      setTempName(name)
      setIsEditing(false)
    }
  }

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (!isEditing && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      setIsEditing(true)
    }
  }

  return (
    <div
      className={cx(
        'flex h-20 w-full items-center justify-between gap-3 rounded-2xl border-2 p-5 transition-all focus:outline-emerald-800',
        isEditing
          ? 'border-blue-500 bg-white ring-2 ring-blue-100'
          : 'border-stone-400 bg-stone-50'
      )}
      tabIndex={isEditing ? -1 : 0}
      onKeyDown={handleCardKeyDown}
    >
      <div className="flex flex-1 items-center gap-3">
        <div
          className={cx(
            'size-4 shrink-0 rounded-full',
            playerBackgroundColorClasses[color]
          )}
        />

        {isEditing ? (
          <Input
            id={`player-name-${color}`}
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onKeyDown={handleInputKeyDown}
            onBlur={() => {
              renameFn(tempName)
              setIsEditing(false)
            }}
            className="body-1 h-10 w-full border-none bg-transparent p-0 focus-visible:ring-0"
            maxLength={16}
            autoFocus
          />
        ) : (
          <p
            className="body-1 max-w-64 flex-1 truncate sm:max-w-64 md:max-w-96"
            onClick={() => {
              setTempName(name)
              setIsEditing(true)
            }}
          >
            {name}
          </p>
        )}
      </div>

      <div className="flex items-center gap-5">
        {!isEditing && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              removeFn()
            }}
            className="cursor-pointer rounded-md p-1 focus:outline-emerald-800"
            aria-label={`Delete ${name}`}
          >
            <Trash2 className="size-5 text-stone-500 hover:text-stone-700" />
          </button>
        )}
      </div>
    </div>
  )
}
