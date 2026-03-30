import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router'
import { Button } from '@ui/button'

import AbortDialog from '@/components/AbortDialog'
import ContinueAlert from '@/components/ContinueAlert'
import useHasGame from '@/hooks/use-has-game'

import InfoContextMenu from './components/InfoDropdownMenu'
import LanguageDropdown from './components/LanguageDropdown'
import useGameStore from './lib/store'

export default function App() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { hasGame, setHasGame } = useHasGame()
  const abortGame = useGameStore((state) => state.abortGame)

  return (
    <div className="page">
      <nav className="flex w-full items-center justify-between p-6">
        <div className="size-8"></div>
        <div className="space-x-5">
          <LanguageDropdown />
          <InfoContextMenu />
        </div>
      </nav>

      <main className="max-sm:standalone:pb-10 page size-full justify-between p-4">
        <div className="my-6 flex flex-col items-center gap-6">
          <img
            src="/shadow-cabinet-logo.png"
            alt="Secret Hitler Logo"
            className="size-[200px] rounded-full"
          />
          <div className="text-con">
            <h1>Shadow Cabinet</h1>
            <p className="body-2">{t('main-page.description')}</p>
          </div>
        </div>

        {hasGame ? (
          <div className="w-full space-y-3">
            <ContinueAlert />
            <AbortDialog
              triggerComp={
                <Button size="mobile" variant="ghost-destructive">
                  {t('main-page.abort-game-btn')}
                </Button>
              }
              onAbort={() => {
                abortGame()
                setHasGame(false)
                navigate('/', { replace: true })
              }}
            />
          </div>
        ) : (
          <Link to="/newgame" className="w-full">
            <Button size="mobile">{t('main-page.new-game-btn')}</Button>
          </Link>
        )}
      </main>
    </div>
  )
}
