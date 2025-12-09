import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useNavigate } from 'react-router'
import { Button } from '@ui/button'
import { X } from 'lucide-react'

import { NO_X_BTN_STATUS } from '@/common/constants'
import AbortDialog from '@/components/AbortDialog'
import MotionWrapper from '@/components/MotionWrapper'
import useHasGame from '@/hooks/use-has-game'
import useGameStore from '@/lib/store'

export default function GameLayout() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const status = useGameStore((state) => state.status)
  const { setHasGame } = useHasGame()

  useEffect(() => {
    navigate(status === 'new-game' ? '/' : `/game/${status}`, { replace: true })
  }, [status, navigate])

  return (
    <div className="page">
      <nav className="flex w-full items-center justify-between p-6">
        <div className="size-8"></div>
        <h2 className="min-h-10">{t(`game-navbar-title.${[status]}`)}</h2>
        {!NO_X_BTN_STATUS.includes(status) ? (
          <AbortDialog
            triggerComp={
              <Button size="icon" variant="ghost">
                <X className="size-7" strokeWidth={2.5} />
              </Button>
            }
            onAbort={() => {
              setHasGame(false)
              navigate('/', { replace: true })
            }}
          />
        ) : null}
      </nav>

      <MotionWrapper type="page-transition">
        <Outlet />
      </MotionWrapper>
    </div>
  )
}
