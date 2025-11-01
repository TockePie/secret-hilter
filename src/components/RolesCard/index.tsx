import React from 'react'
import clsx from 'clsx'

import { ROLE_CONFIG } from '@/common/constants'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'

import Flip from '../Flip'

interface RolesCardProps extends Player {
  nextFn?: (() => void) | undefined
}

const RolesCard: React.FC<RolesCardProps> = ({ name, color, role, nextFn }) => {
  const roleConfig = ROLE_CONFIG[role]

  const FrontPart = () => (
    <div className="flex size-full flex-col rounded-3xl border border-stone-400 bg-stone-50 text-center">
      <span
        className={clsx(
          'my-auto w-full text-5xl font-bold',
          playerTextColorClasses[color]
        )}
      >
        {name}
      </span>
      <p className="mb-2 text-xl text-stone-500">Press to reveal role</p>
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
        <span className={clsx('w-full text-5xl font-bold', roleConfig.color)}>
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </span>
      </div>
      <p className="mb-2 text-xl text-stone-500">
        Press to move to the next player
      </p>
    </div>
  )

  return (
    <div className="h-115 w-full select-none">
      <Flip frontPart={<FrontPart />} backPart={<BackPart />} />
    </div>
  )
}

export default RolesCard
