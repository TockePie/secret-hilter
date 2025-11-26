import clsx from 'clsx'

import useGameStore from '@/lib/store'
import capitalizeFirstLetter from '@/utils/capital-word'

export default function PolicyCard() {
  const { tilesSnapshot } = useGameStore.getState()

  const policy = tilesSnapshot.find((tile) => !('disabled' in tile))

  const borderColor = clsx(
    policy?.type === 'fascist'
      ? 'border-red-400 bg-red-200 text-red-800'
      : policy?.type === 'liberal'
        ? 'border-blue-400 bg-blue-200 text-blue-800'
        : 'border-stone-400 bg-stone-100 text-stone-800',
    'text-con flex size-full flex-col items-center justify-center rounded-3xl border-2 p-6'
  )

  const textColor = clsx(
    'text-xl',
    policy?.type === 'fascist'
      ? 'text-red-500'
      : policy?.type === 'liberal'
        ? 'text-blue-500'
        : 'text-stone-500'
  )

  return (
    <div className={borderColor}>
      <h1>{capitalizeFirstLetter(policy?.type ?? 'Unknown')}</h1>
      <p className={textColor}>Policy enacted</p>
    </div>
  )
}
