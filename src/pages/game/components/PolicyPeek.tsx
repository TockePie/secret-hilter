import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import { Eye } from 'lucide-react'

import TileCard from '@/components/TileCard'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

export default function PolicyPeek() {
  const { t } = useTranslation()
  const { players, president, policyTiles, updateStatus, setUIState } =
    useGameStore.getState()
  const uiState = useGameStore((state) => state.uiState.policyPeekRevealed)

  const currentPlayer = players.find((player) => player.id === president)

  const handleShow = () => {
    setUIState({ policyPeekRevealed: true })
  }

  const handleContinue = () => {
    updateStatus('choose-cancelour')

    setTimeout(() => setUIState({ policyPeekRevealed: false }), 1000)
  }

  return (
    <>
      <main className="page-main h-full pb-40">
        <div className="text-con my-auto h-34">
          <h1
            className={playerTextColorClasses[currentPlayer?.color ?? 'slate']}
          >
            {currentPlayer?.name}
          </h1>
          <h4>{t('policy-peek.description')}</h4>
        </div>

        <div className="mx-auto flex justify-between">
          <Eye size={32} className="flex-2 text-stone-500" />
          <span className="body-2 max-w-[84%]">
            {t('policy-peek.annotation')}
          </span>
        </div>

        <div className="flex w-full flex-col gap-3">
          {policyTiles.slice(0, 3).map((tile) => (
            <TileCard
              key={tile.id}
              state={uiState ? 'default' : 'hidden'}
              {...tile}
            />
          ))}
        </div>
      </main>

      <footer className="fixed-bottom">
        {uiState ? (
          <Button className="max-w-134" size="mobile" onClick={handleContinue}>
            {t('continue-btn')}
          </Button>
        ) : (
          <Button className="max-w-134" size="mobile" onClick={handleShow}>
            {t('policy-peek.show-btn')}
          </Button>
        )}
      </footer>
    </>
  )
}
