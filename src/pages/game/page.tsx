import React from 'react'
import { ArrowLeft, X } from 'lucide-react'

import AbortDialog from '@/components/AbortDialog'
import useGameStore from '@/lib/store'

import NoGamePage from './components/NoGamePage'
import RolesPage from './components/RolesPage'
import SleepStagePage from './components/SleepStagePage'

const GamePage = () => {
  const status = useGameStore((state) => state.status)

  const PAGE_CONFIG: Record<
    typeof status,
    { page: React.JSX.Element; title: string }
  > = {
    'new-game': {
      page: <NoGamePage />,
      title: ''
    },
    'role-revealing': {
      page: <RolesPage />,
      title: 'Roles'
    },
    'sleep-stage': {
      page: <SleepStagePage />,
      title: 'Sleep stage'
    }
  }

  return (
    <div className="mx-auto flex h-screen max-w-146 flex-col items-center">
      <nav className="flex w-full items-center justify-between p-6">
        <ArrowLeft size={32} />
        <span className="text-center text-4xl font-bold">
          {PAGE_CONFIG[status].title}
        </span>
        <AbortDialog triggerComp={<X size={32} />} />
      </nav>

      {PAGE_CONFIG[status]?.page}
    </div>
  )
}

export default GamePage
