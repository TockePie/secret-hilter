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
  { image: string; color: string }
> = {
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

//TODO: Adapt instructions for big team
export const SLEEP_STAGE_INSTR = {
  smallTeam: `1. Close your eyes. 
    (Wait for everyone to do this.)
    2. fascists and Hitler, open your eyes and acknowledge each other.
    (Take a moment to connect silently.)
    3. Open your eyes.
    (When everyone is ready, proceed.)`,
  bigTeam: `1. Close your eyes. 
    (Wait for everyone to do this.)
    2. fascists who are NOT Hitler, open your eyes and acknowledge each other.
    (Take a moment to connect silently.)
    3. Hitler, keep your eyes closed but raise your hand
    4. Open your eyes.
    (When everyone is ready, proceed.)`
}
