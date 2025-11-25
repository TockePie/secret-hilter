import type { Store } from '@/lib/store/store'

export const TITLE_MAP: { [key in Store['status']]: string } = {
  'new-game': '',
  'role-revealing': 'Roles',
  'sleep-stage': 'Sleep stage',
  'choose-cancelour': '',
  'confirm-candidates': 'Voting',
  'prepresident-move': 'Enacting',
  'president-move': 'Enacting',
  'prechancellor-move': 'Enacting',
  'chancellor-move': 'Enacting',
  results: 'Results',
  'policy-peek': 'Policy peek'
} as const
