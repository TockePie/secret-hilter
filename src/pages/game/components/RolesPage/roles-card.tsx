import { useTranslation } from 'react-i18next'
import { cx } from 'class-variance-authority'

import { ROLE_CONFIG } from '@/common/constants'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'

import Flip from './flip'

interface Props extends Player {
  nextFn?: (() => void) | undefined
}

export default function RolesCard({ name, color, role, nextFn }: Props) {
  const { t } = useTranslation()
  const roleConfig = ROLE_CONFIG[role]

  const FrontPart = () => (
    <div className="flex size-full flex-col rounded-3xl border border-stone-400 bg-stone-50 text-center">
      <h1
        className={cx('m-auto w-full max-w-84', playerTextColorClasses[color])}
      >
        {name}
      </h1>
      <p className="body-2 mb-2">{t('role-revealing-page.front-annotation')}</p>
    </div>
  )

  const BackPart = () => (
    <div
      className="flex size-full flex-col justify-between rounded-3xl border border-stone-400 bg-stone-50 text-center"
      onClick={nextFn}
    >
      <div className="flex flex-col gap-3">
        <img
          src={roleConfig.image}
          alt={`${role} role image`}
          className="mx-auto mt-4 size-64"
        />
        <h1 className={cx('w-full', roleConfig.text)}>
          {t(`player.role.${role}.title`)}
        </h1>
      </div>
      <p className="body-2 mb-2">{t('role-revealing-page.back-annotation')}</p>
    </div>
  )

  return (
    <div className="h-123 w-full select-none">
      <Flip frontPart={<FrontPart />} backPart={<BackPart />} />
    </div>
  )
}
