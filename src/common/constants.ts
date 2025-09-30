import { Player } from '@/types/player'

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
