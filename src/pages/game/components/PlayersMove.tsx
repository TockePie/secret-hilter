import { useTranslation } from 'react-i18next'

import TileCard from '@/components/TileCard'
import useGameStore from '@/lib/store'

export default function PlayersMove() {
  const { t } = useTranslation()
  const { status, tilesSnapshot, discardTile, updateStatus } =
    useGameStore.getState()

  const handleDiscard = (id: number) => () => {
    discardTile(id)

    if (status === 'president-move') {
      updateStatus('prechancellor-move')
    } else if (status === 'chancellor-move') {
      updateStatus('results')
    }
  }

  return (
    <main className="page-main max-sm:standalone:pb-10 flex-grow justify-between pb-6">
      <h4 className="my-auto">{t('players-move.question')}</h4>

      <div className="flex w-full flex-col gap-3">
        {tilesSnapshot &&
          tilesSnapshot.map((props) => (
            <TileCard
              key={props.id}
              actionFn={handleDiscard(props.id)}
              state={props.disabled ? 'discarted' : 'default'}
              {...props}
            />
          ))}
      </div>
    </main>
  )
}
