import type { Store } from '@/lib/store/store'

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
