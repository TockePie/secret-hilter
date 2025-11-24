import type { Store } from '@/lib/store/store'
import type { Player } from '@/types/player'
import type { PolicyTilesProps } from '@/types/policy-tiles'

export const PLAYER_CONFIG = {
  5: {
    liberals: 3,
    fascists: 1,
    hitler: 1
  },
  6: {
    liberals: 4,
    fascists: 1,
    hitler: 1
  },
  7: {
    liberals: 4,
    fascists: 2,
    hitler: 1
  },
  8: {
    liberals: 5,
    fascists: 2,
    hitler: 1
  },
  9: {
    liberals: 5,
    fascists: 3,
    hitler: 1
  },
  10: {
    liberals: 6,
    fascists: 3,
    hitler: 1
  }
}

export const POLICY_TILES: PolicyTilesProps[] = [
  {
    id: 1,
    type: 'fascist'
  },
  {
    id: 2,
    type: 'fascist'
  },
  {
    id: 3,
    type: 'fascist'
  },
  {
    id: 4,
    type: 'fascist'
  },
  {
    id: 5,
    type: 'fascist'
  },
  {
    id: 6,
    type: 'fascist'
  },
  {
    id: 7,
    type: 'fascist'
  },
  {
    id: 8,
    type: 'fascist'
  },
  {
    id: 9,
    type: 'fascist'
  },
  {
    id: 10,
    type: 'fascist'
  },
  {
    id: 11,
    type: 'fascist'
  },
  {
    id: 12,
    type: 'liberal'
  },
  {
    id: 13,
    type: 'liberal'
  },
  {
    id: 14,
    type: 'liberal'
  },
  {
    id: 15,
    type: 'liberal'
  },
  {
    id: 16,
    type: 'liberal'
  },
  {
    id: 17,
    type: 'liberal'
  }
]

export const ROLE_CONFIG: Record<
  Player['role'],
  { image: string; text: string; border: string }
> = {
  liberal: {
    image: '/liberal.png',
    text: 'text-blue-800',
    border: 'border-blue-800'
  },
  fascist: {
    image: '/fascist.png',
    text: 'text-red-800',
    border: 'border-red-800'
  },
  hitler: {
    image: '/hitler.png',
    text: 'text-red-800',
    border: 'border-red-800'
  }
}

export const POWERS: Record<
  '5to6' | '7to8' | '9to10',
  Record<number, Store['status']>
> = {
  '5to6': {
    3: 'policy-peek',
    4: 'execution',
    5: 'execution'
  },
  '7to8': {
    3: 'investigate-loyalty',
    4: 'special-election',
    5: 'execution'
  },
  '9to10': {
    1: 'investigate-loyalty',
    2: 'investigate-loyalty',
    3: 'special-election',
    4: 'execution',
    5: 'execution'
  }
}
