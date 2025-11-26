import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { Button } from '@ui/button'
import { AnimatePresence, motion } from 'framer-motion'
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
        <h2 className="min-h-10">{TITLE_MAP[status]}</h2>
        <AbortDialog
          triggerComp={
            <Button size="icon" variant="ghost">
              <X className="size-7" strokeWidth={2.5} />
            </Button>
          }
        />
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          className="flex w-full flex-grow flex-col"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
