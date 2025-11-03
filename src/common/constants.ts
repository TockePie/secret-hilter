import type { Player } from '@/types/player'
import type { PolicyTilesType } from '@/types/policy-tiles'

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

export const POLICY_TILES: {
  id: number
  type: PolicyTilesType
}[] = [
  {
    id: 1,
    type: 'Fascist'
  },
  {
    id: 2,
    type: 'Fascist'
  },
  {
    id: 3,
    type: 'Fascist'
  },
  {
    id: 4,
    type: 'Fascist'
  },
  {
    id: 5,
    type: 'Fascist'
  },
  {
    id: 6,
    type: 'Fascist'
  },
  {
    id: 7,
    type: 'Fascist'
  },
  {
    id: 8,
    type: 'Fascist'
  },
  {
    id: 9,
    type: 'Fascist'
  },
  {
    id: 10,
    type: 'Fascist'
  },
  {
    id: 11,
    type: 'Fascist'
  },
  {
    id: 12,
    type: 'Liberal'
  },
  {
    id: 13,
    type: 'Liberal'
  },
  {
    id: 14,
    type: 'Liberal'
  },
  {
    id: 15,
    type: 'Liberal'
  },
  {
    id: 16,
    type: 'Liberal'
  },
  {
    id: 17,
    type: 'Liberal'
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
    2. Fascists and Hitler, open your eyes and acknowledge each other.
    (Take a moment to connect silently.)
    3. Open your eyes.
    (When everyone is ready, proceed.)`,
  bigTeam: `1. Close your eyes. 
    (Wait for everyone to do this.)
    2. Fascists who are NOT Hitler, open your eyes and acknowledge each other.
    (Take a moment to connect silently.)
    3. Hitler, keep your eyes closed but raise your hand
    4. Open your eyes.
    (When everyone is ready, proceed.)`
}
