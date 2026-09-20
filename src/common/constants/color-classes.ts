import { PlayerColor } from '@/types/enums/player-color'

export interface PlayerColorStyle {
  text: string
  bg: string
  border?: string
}

export const PLAYER_COLOR_CLASSES: Record<PlayerColor, PlayerColorStyle> = {
  [PlayerColor.NEUTRAL]: { text: 'text-neutral-600', bg: 'bg-neutral-600' },
  [PlayerColor.SLATE]: { text: 'text-slate-600', bg: 'bg-slate-600' },
  [PlayerColor.RED]: { text: 'text-red-600', bg: 'bg-red-600' },
  [PlayerColor.AMBER]: { text: 'text-amber-600', bg: 'bg-amber-600' },
  [PlayerColor.GREEN]: { text: 'text-green-600', bg: 'bg-green-600' },
  [PlayerColor.TEAL]: { text: 'text-teal-600', bg: 'bg-teal-600' },
  [PlayerColor.SKY]: { text: 'text-sky-600', bg: 'bg-sky-600' },
  [PlayerColor.INDIGO]: { text: 'text-indigo-600', bg: 'bg-indigo-600' },
  [PlayerColor.PURPLE]: { text: 'text-purple-600', bg: 'bg-purple-600' },
  [PlayerColor.PINK]: { text: 'text-pink-600', bg: 'bg-pink-600' }
} as const
