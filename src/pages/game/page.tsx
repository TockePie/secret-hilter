import React from 'react'
import { Button } from '@ui/button'
import { X } from 'lucide-react'

import AbortDialog from '@/components/AbortDialog'
import useGameStore from '@/lib/store'
import type { Store } from '@/lib/store/store'

import ChooseCancelourPage from './components/ChooseCancelour'
import ConfirmCandidates from './components/ConfirmCandidates'
import NoGamePage from './components/NoGamePage'
import PlayersMove from './components/PlayersMove'
import RolesPage from './components/RolesPage'
import SleepStagePage from './components/SleepStagePage'

const PAGE_CONFIG: Record<
  Store['status'],
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
  },
  'choose-cancelour': {
    page: <ChooseCancelourPage />,
    title: ''
  },
  'confirm-candidates': {
    page: <ConfirmCandidates />,
    title: 'Voting'
  },
  'prepresident-move': {
    page: <PlayersMove role="president" />,
    title: 'Enacting'
  }
}

export default function GamePage() {
  const status = useGameStore((state) => state.status)

  return (
    <div className="page">
      <nav className="flex w-full items-center justify-between p-6">
        <div className="size-8"></div>
        <h2>{PAGE_CONFIG[status].title}</h2>
        <AbortDialog
          triggerComp={
            <Button size="icon" variant="ghost">
              <X className="size-7" strokeWidth={2.5} />
            </Button>
          }
        />
      </nav>

      {PAGE_CONFIG[status]?.page}
    </div>
  )
}
