import PlayerColor from '@/types/enums/player-color'

export default function getRandomAvailableColor(
  usedColors: PlayerColor[]
): PlayerColor {
  const allColors = Object.values(PlayerColor)
  const availableColors = allColors.filter(
    (color) => !usedColors.includes(color)
  )

  return availableColors[Math.floor(Math.random() * availableColors.length)]
}
