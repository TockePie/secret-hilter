import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { Trash2, Trophy } from 'lucide-react'

import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'

interface KillDialogProps extends Player {
  triggerComp: React.ReactElement
}

export default function KillDialog({
  triggerComp,
  id,
  name,
  color
}: KillDialogProps) {
  const { t } = useTranslation()
  const { killPlayer, updateStatus, setNewCandidatePresident } =
    useGameStore.getState()

  const handleKill = () => {
    killPlayer(id)
    setNewCandidatePresident()
    updateStatus('choose-cancelour')
  }

  return (
    <Dialog>
      <DialogTrigger>{triggerComp}</DialogTrigger>
      <DialogContent className="gap-10">
        <DialogTitle>
          {t('execution.dialog.title')}{' '}
          <span className={playerTextColorClasses[color]}>{name}</span>?
        </DialogTitle>

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <Trash2 size={32} className="flex-1 text-stone-500" />
            <span className="body-2 flex-7">
              {t('execution.dialog.description-1')}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Trophy size={32} className="flex-1 text-stone-500" />
            <span className="body-2 flex-7">
              {t('execution.dialog.description-2')}
            </span>
          </div>
        </div>

        <DialogFooter className="flex flex-col flex-wrap gap-3">
          <Button variant="destructive" size="mobile" onClick={handleKill}>
            {t('execution.dialog.kill-btn')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
