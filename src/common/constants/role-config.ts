import type { Player } from '@/types/player'

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
