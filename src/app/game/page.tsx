'use client'

import React from 'react'
import { ArrowLeft, X } from 'lucide-react'

import useGameStore from '@/lib/store'

import RolesPage from './components/RolesPage'
import SleepStagePage from './components/SleepStagePage'

const GamePage = () => {
  const status = useGameStore((state) => state.status)

  const PAGE_CONFIG: Record<
    typeof status,
    { page: React.JSX.Element; title: string }
  > = {
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
          {/* {PAGE_CONFIG[status].title} */}
          Sleep stage
        </span>
        <X size={32} />
      </nav>

      {/* {PAGE_CONFIG[status]?.page} */}
      <SleepStagePage />
    </div>
  )
}

export default GamePage
