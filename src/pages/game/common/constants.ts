import type { Store } from '@/lib/store/store'

export const TITLE_MAP: { [key in Store['status']]: string } = {
  'new-game': '',
  'role-revealing': 'Roles',
  'sleep-stage': 'Sleep stage',
  'choose-cancelour': '',
  'confirm-candidates': 'Voting',
  chaos: '',
  'prepresident-move': 'Enacting',
  'president-move': 'Enacting',
  'prechancellor-move': 'Enacting',
  'chancellor-move': 'Enacting',
  results: 'Results',
  'investigate-loyalty': 'Investigation',
  'policy-peek': 'Policy peek',
  execution: 'Execution'
} as const
