import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import { playerTextColorClasses } from '@/styles/color-classes'
import { Player } from '@/types/player'

import Flip from '../Flip'

const ROLE_CONFIG: Record<Player['role'], { image: string; color: string }> = {
  liberal: {
    image: '/liberal.png',
    color: 'text-blue-800'
  },
  fascist: {
    image: '/fascist.png',
    color: 'text-red-800'
  },
  hitler: {
    image: '/hitler.png',
    color: 'text-red-800'
  }
}

const RolesCard: React.FC<Player> = ({ name, color, role }) => {
  const roleConfig = ROLE_CONFIG[role]

  return (
    <div className="h-115 w-full">
      <Flip
        frontPart={
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
        }
        backPart={
          <div className="flex size-full flex-col justify-between rounded-3xl border border-stone-400 bg-stone-50 text-center">
            <div className="flex flex-col gap-3">
              <Image
                src={roleConfig.image}
                width={256}
                height={256}
                alt={`${role} role image`}
                className="mx-auto mt-4"
              />
              <span
                className={clsx('w-full text-5xl font-bold', roleConfig.color)}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </span>
            </div>
            <p className="mb-2 text-xl text-stone-500">
              Press to move to the next player
            </p>
          </div>
        }
      />
    </div>
  )
}

export default RolesCard
