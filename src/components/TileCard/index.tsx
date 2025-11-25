import clsx from 'clsx'

import { ROLE_CONFIG } from '@/common/constants'
import type { PolicyTilesProps } from '@/types/policy-tiles'
import capitalizeFirstLetter from '@/utils/capital-word'

interface TileCardProps extends PolicyTilesProps {
  state?: 'hidden' | 'discarted' | 'default'
  actionFn?: () => void
}

export default function TileCard({
  id,
  type,
  state = 'default',
  actionFn
}: TileCardProps) {
  const roleConfig = ROLE_CONFIG[type]
  const isDisabled = state === 'discarted' || state === 'hidden'

  const cardClasses = clsx(
    'relative rounded-3xl border-2 p-8 text-center select-none',
    isDisabled
      ? 'cursor-not-allowed bg-stone-200 text-stone-600 border-stone-600'
      : `${roleConfig.text} ${roleConfig.border}`,
    actionFn &&
      !isDisabled &&
      'cursor-pointer hover:bg-stone-100 active:bg-stone-200'
  )

  const title = isDisabled
    ? capitalizeFirstLetter(state)
    : capitalizeFirstLetter(type)

  return (
    <div className={cardClasses} onClick={isDisabled ? undefined : actionFn}>
      <h1>{title}</h1>
      {!isDisabled && (
        <p className="absolute top-3 right-5 text-lg text-stone-500">#{id}</p>
      )}
    </div>
  )
}
