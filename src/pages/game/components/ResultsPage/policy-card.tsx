import { useTranslation } from 'react-i18next'
import { cva } from 'class-variance-authority'

import type { TilesSnapshotProps } from '@/types/policy-tiles'

export default function PolicyCard({
  policy
}: {
  policy: TilesSnapshotProps | undefined
}) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div
      className={borderVariants({
        type: policy?.type
      })}
    >
      {lang === 'ua' ? (
        <h2>{t(`policy.${policy?.type}`)}</h2>
      ) : (
        <h1>{t(`policy.${policy?.type}`)}</h1>
      )}
      <p
        className={textVariants({
          type: policy?.type
        })}
      >
        {t('results-page.policy-enacted')}
      </p>
    </div>
  )
}

const borderVariants = cva(
  'text-con flex size-full flex-col items-center justify-center rounded-3xl border-2 p-6',
  {
    variants: {
      type: {
        fascist: 'border-red-400 bg-red-200 text-red-800',
        liberal: 'border-blue-400 bg-blue-200 text-blue-800',
        default: 'border-stone-400 bg-stone-100 text-stone-800'
      }
    },
    defaultVariants: {
      type: 'default'
    }
  }
)

const textVariants = cva('text-xl', {
  variants: {
    type: {
      fascist: 'text-red-500',
      liberal: 'text-blue-500',
      default: 'text-stone-500'
    }
  },
  defaultVariants: {
    type: 'default'
  }
})
