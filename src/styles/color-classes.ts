import { PlayerColor } from '@/types/enums/player-color'

export const playerTextColorClasses: Record<PlayerColor, string> = {
  [PlayerColor.NEUTRAL]: 'text-neutral-600',
  [PlayerColor.SLATE]: 'text-slate-600',
  [PlayerColor.RED]: 'text-red-600',
  [PlayerColor.AMBER]: 'text-amber-600',
  [PlayerColor.GREEN]: 'text-green-600',
  [PlayerColor.TEAL]: 'text-teal-600',
  [PlayerColor.SKY]: 'text-sky-600',
  [PlayerColor.INDIGO]: 'text-indigo-600',
  [PlayerColor.PURPLE]: 'text-purple-600',
  [PlayerColor.PINK]: 'text-pink-600'
}

export const playerBackgroundColorClasses: Record<PlayerColor, string> = {
  [PlayerColor.NEUTRAL]: 'bg-neutral-600',
  [PlayerColor.SLATE]: 'bg-slate-600',
  [PlayerColor.RED]: 'bg-red-600',
  [PlayerColor.AMBER]: 'bg-amber-600',
  [PlayerColor.GREEN]: 'bg-green-600',
  [PlayerColor.TEAL]: 'bg-teal-600',
  [PlayerColor.SKY]: 'bg-sky-600',
  [PlayerColor.INDIGO]: 'bg-indigo-600',
  [PlayerColor.PURPLE]: 'bg-purple-600',
  [PlayerColor.PINK]: 'bg-pink-600'
}
