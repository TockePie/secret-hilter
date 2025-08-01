import PlayerColor from '@/types/enums/player-color'

const getRandomAvailableColor = (usedColors: PlayerColor[]): PlayerColor => {
  const allColors = Object.values(PlayerColor)
  const availableColors = allColors.filter(
    (color) => !usedColors.includes(color)
  )
  return availableColors[Math.floor(Math.random() * availableColors.length)]
}

export default getRandomAvailableColor
