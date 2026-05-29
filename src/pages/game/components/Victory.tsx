import { useEffect } from 'react'
import Confetti from 'react-confetti'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Button } from '@ui/button'
import { cx } from 'class-variance-authority'
import { ChessQueen } from 'lucide-react'

import { ROLE_CONFIG } from '@/common/constants'
import useHasGame from '@/hooks/use-has-game'
import useGameStore from '@/lib/store'

export default function Victory() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { setHasGame } = useHasGame()

  const setUIState = useGameStore((s) => s.setUIState)
  const abortGame = useGameStore((s) => s.abortGame)
  const uiState = useGameStore((s) => s.uiState.hasConfettiFallen)
  const victoryDetails = useGameStore((s) => s.victoryDetails)

  useEffect(() => {
    if (uiState === 'no') {
      setUIState({ hasConfettiFallen: 'in-process' })
    }
  }, [uiState, setUIState])

  if (!victoryDetails) return

  const accentColor =
    victoryDetails.whoWon === 'liberals'
      ? ROLE_CONFIG.liberal.text
      : victoryDetails.whoWon === 'fascists'
        ? ROLE_CONFIG.fascist.text
        : 'text-stone-800'

  const handleFinish = () => {
    setHasGame(false)
    navigate('/', { replace: true })
    abortGame()
  }

  return (
    <>
      <main className="page-main h-full pb-35">
        <ChessQueen className={cx(accentColor, 'size-25')} strokeWidth={1.25} />
        <div className="text-con">
          <h1 className={accentColor}>{t('victory-page.victory')}</h1>
          <h4>{t(`victory-page.who-won.${victoryDetails.whoWon}`)}</h4>
        </div>

        <div className="mt-4 w-full border-y-2 border-stone-400 bg-stone-200 p-4 text-center max-md:w-screen md:rounded-2xl md:border-2">
          <p className="body-1 mx-auto w-full max-w-96">
            {t(`victory-page.what-happened.${victoryDetails.whatHappened}`)}
          </p>
        </div>
      </main>

      <footer className="fixed-bottom">
        <Button size="mobile" onClick={handleFinish}>
          {t('victory-page.finish-game-btn')}
        </Button>
      </footer>

      {uiState === 'in-process' && (
        <Confetti
          recycle={false}
          onConfettiComplete={() => setUIState({ hasConfettiFallen: 'yes' })}
        />
      )}
    </>
  )
}
