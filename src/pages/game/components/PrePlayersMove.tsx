import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import { Eye } from 'lucide-react'

import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

export default function PrePlayersMove({
  role
}: {
  role: 'president' | 'chancellor'
}) {
  const { t } = useTranslation()
  const { players, president, chancellor, updateStatus } =
    useGameStore.getState()

  const currentPlayer = players.find(
    (p) => p.id === (role === 'president' ? president : chancellor)
  )

  const handleContinue = () => {
    updateStatus(role === 'president' ? 'president-move' : 'chancellor-move')
  }

  return (
    <>
      <main className="page-main h-full pb-35">
        <div className="my-auto space-y-4 text-center">
          <h1
            className={playerTextColorClasses[currentPlayer?.color ?? 'slate']}
          >
            {t('preplayers-move.player', { name: currentPlayer?.name })}
          </h1>
          <h3>{t('preplayers-move.move')}</h3>
        </div>
      </main>

      <footer className="fixed-bottom">
        <div className="mx-auto flex justify-between">
          <Eye size={32} className="flex-2 text-stone-500" />
          <span className="body-2 max-w-[84%]">
            {t('preplayers-move.annotation')}
          </span>
        </div>

        <Button size="mobile" onClick={handleContinue}>
          {t('continue-btn')}
        </Button>
      </footer>
    </>
  )
}
