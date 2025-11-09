import clsx from 'clsx'

import { ROLE_CONFIG } from '@/common/constants'
import type { PolicyTilesProps } from '@/types/policy-tiles'
import capitalizeFirstLetter from '@/utils/capital-word'

interface TileCardProps extends PolicyTilesProps {
  discarted: boolean
  actionFn: () => void
}

export default function TileCard({
  id,
  type,
  discarted,
  actionFn
}: TileCardProps) {
  const roleConfig = ROLE_CONFIG[type]

  return (
    <div
      className={clsx(
        'relative rounded-3xl border-2 p-8 text-center select-none',
        discarted
          ? 'cursor-not-allowed bg-stone-200'
          : 'cursor-pointer bg-stone-50 hover:bg-stone-100 active:bg-stone-200',
        discarted ? 'text-stone-600' : roleConfig.text,
        discarted ? 'border-stone-600' : roleConfig.border
      )}
      onClick={actionFn}
    >
      <h1>{discarted ? 'Discarted' : capitalizeFirstLetter(type)}</h1>
      {!discarted && (
        <p className="absolute top-3 right-5 text-lg text-stone-500">#{id}</p>
      )}
    </div>
  )
}
