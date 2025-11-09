import useGameStore from '@/lib/store'

import TileCard from './tile-card'

export default function PlayersMove() {
  const { policyTiles } = useGameStore.getState()

  const slicedTiles = policyTiles.slice(0, 3)

  return (
    <main className="page-main max-sm:standalone:pb-10 justify-between">
      <h4>Which policy you would like to discard?</h4>

      <div className="flex w-full flex-col gap-3">
        {slicedTiles.map((props) => (
          <TileCard key={props.id} {...props} />
        ))}
      </div>
    </main>
  )
}
