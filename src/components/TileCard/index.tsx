import { useTranslation } from 'react-i18next'
import { cva } from 'class-variance-authority'

import { ROLE_CONFIG } from '@/common/constants'
import type { PolicyTilesProps } from '@/types/policy-tiles'

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
  const { t, i18n } = useTranslation()

  const lang = i18n.language
  const roleConfig = ROLE_CONFIG[type]
  const isDisabled = state === 'discarted' || state === 'hidden'

  const cardClasses = tileCardVariants({
    intent: state,
    isClickable: !!actionFn && !isDisabled,
    class: state === 'default' ? `${roleConfig.text} ${roleConfig.border}` : ''
  })

  const title = isDisabled ? t(`tile-card.${[state]}`) : t(`policy.${[type]}`)

  return (
    <div className={cardClasses} onClick={isDisabled ? undefined : actionFn}>
      {lang === 'ua' ? <h2>{t(title)}</h2> : <h1>{t(title)}</h1>}
      {!isDisabled && (
        <p className="absolute top-3 right-5 text-lg text-stone-500">#{id}</p>
      )}
    </div>
  )
}

const tileCardVariants = cva(
  'relative rounded-3xl border-2 p-8 text-center select-none',
  {
    variants: {
      intent: {
        default: '',
        hidden:
          'cursor-not-allowed bg-stone-200 text-stone-600 border-stone-600',
        discarted:
          'cursor-not-allowed bg-stone-200 text-stone-600 border-stone-600'
      },
      isClickable: {
        true: 'cursor-pointer hover:bg-stone-100 active:bg-stone-200',
        false: ''
      }
    },
    defaultVariants: {
      intent: 'default',
      isClickable: false
    }
  }
)
