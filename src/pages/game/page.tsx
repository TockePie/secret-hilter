import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { Button } from '@ui/button'
import { X } from 'lucide-react'

import AbortDialog from '@/components/AbortDialog'
import useGameStore from '@/lib/store'

import { TITLE_MAP } from './common/constants'

export default function GameLayout() {
  const navigate = useNavigate()
  const status = useGameStore((state) => state.status)

  useEffect(() => {
    navigate(status === 'new-game' ? '/' : `/game/${status}`, { replace: true })
  }, [status, navigate])

  return (
    <div className="page">
      <nav className="flex w-full items-center justify-between p-6">
        <div className="size-8"></div>
        <h2>{TITLE_MAP[status]}</h2>
        <AbortDialog
          triggerComp={
            <Button size="icon" variant="ghost">
              <X className="size-7" strokeWidth={2.5} />
            </Button>
          }
        />
      </nav>

      <Outlet />
    </div>
  )
}
