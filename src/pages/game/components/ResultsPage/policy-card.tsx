import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import useGameStore from '@/lib/store'

export default function PolicyCard() {
  const { t, i18n } = useTranslation()
  const { tilesSnapshot } = useGameStore.getState()
  const lang = i18n.language

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
      {lang === 'ua' ? (
        <h2>{t(`policy.${policy?.type}`)}</h2>
      ) : (
        <h1>{t(`policy.${policy?.type}`)}</h1>
      )}
      <p className={textColor}>{t('results-page.policy-enacted')}</p>
    </div>
  )
}
