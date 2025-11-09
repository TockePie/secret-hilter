import React from 'react'
import clsx from 'clsx'

import { ROLE_CONFIG } from '@/common/constants'
import Flip from '@/components/Flip'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'
import capitalizeFirstLetter from '@/utils/capital-word'

interface RolesCardProps extends Player {
  nextFn?: (() => void) | undefined
}

const RolesCard: React.FC<RolesCardProps> = ({ name, color, role, nextFn }) => {
  const roleConfig = ROLE_CONFIG[role]

  const FrontPart = () => (
    <div className="flex size-full flex-col rounded-3xl border border-stone-400 bg-stone-50 text-center">
      <h1 className={clsx('my-auto w-full', playerTextColorClasses[color])}>
        {name}
      </h1>
      <p className="body-2 mb-2">Press to reveal role</p>
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
          className="mx-auto mt-4 size-[256px]"
        />
        <h1 className={clsx('w-full', roleConfig.text)}>
          {capitalizeFirstLetter(role)}
        </h1>
      </div>
      <p className="body-2 mb-2">Press to move to the next player</p>
    </div>
  )

  return (
    <div className="h-115 w-full select-none">
      <Flip frontPart={<FrontPart />} backPart={<BackPart />} />
    </div>
  )
}

export default RolesCard
