import { useTranslation } from 'react-i18next'
import { cx } from 'class-variance-authority'
import { Crown, Landmark } from 'lucide-react'

import { PLAYER_COLOR_CLASSES } from '@/common/constants/color-classes'
import type { Player } from '@/types/player'

interface Props {
  presidentData: Player
  chancellorData: Player
}

export default function CandidatesCard({
  presidentData,
  chancellorData
}: Props) {
  const { t } = useTranslation()

  return (
    <div className="flex w-full max-w-96 flex-col gap-8 rounded-2xl border-2 border-stone-300 p-5 py-8 shadow-xl">
      <div className="mx-auto flex items-center gap-5">
        <Crown
          strokeWidth={2.5}
          size={48}
          className={PLAYER_COLOR_CLASSES[presidentData.color ?? 'slate'].text}
        />
        <div className="flex flex-col">
          <h2
            className={cx(
              PLAYER_COLOR_CLASSES[presidentData.color ?? 'slate'].text,
              'w-full max-w-56 wrap-break-word'
            )}
          >
            {presidentData.name}
          </h2>
          <p className="body-2">
            {t('confirm-candidates-page.candidates-card.as-president')}
          </p>
        </div>
      </div>

      <hr className="w-full border border-stone-200" />

      <div className="mx-auto flex items-center gap-5">
        <Landmark
          strokeWidth={2.5}
          size={48}
          className={PLAYER_COLOR_CLASSES[chancellorData.color ?? 'slate'].text}
        />
        <div className="flex flex-col">
          <h2
            className={cx(
              PLAYER_COLOR_CLASSES[chancellorData.color ?? 'slate'].text,
              'w-full max-w-56 wrap-break-word'
            )}
          >
            {chancellorData.name}
          </h2>
          <p className="body-2">
            {t('confirm-candidates-page.candidates-card.as-chancellor')}
          </p>
        </div>
      </div>
    </div>
  )
}
