import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { Crown, Info, Users } from 'lucide-react'

import { playerTextColorClasses } from '@/styles/color-classes'
import type { LobbyPlayer } from '@/types/player'

interface Props extends LobbyPlayer {
  triggerComp: React.ReactNode
  onConfirm?: () => void
}

export default function ConfirmDialog({
  triggerComp,
  name,
  color,
  onConfirm
}: Props) {
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger>{triggerComp}</DialogTrigger>
      <DialogContent
        className="max-w-100 gap-6 text-stone-800"
        aria-describedby="kill-player-description"
        showCloseButton={false}
      >
        <DialogHeader className="flex flex-col items-center gap-6 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Info size={32} />
          </div>

          <DialogTitle className="text-center">
            {t('special-election.dialog.title')}{' '}
            <span className={playerTextColorClasses[color]}>{name}</span>?
          </DialogTitle>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-3">
              <Crown size={32} className="flex-1 text-stone-500" />
              <span className="body-2 flex-7 text-left">
                {t('special-election.dialog.description-1')}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <Users size={32} className="flex-1 text-stone-500" />
              <span className="body-2 flex-7 text-left">
                {t('special-election.dialog.description-2')}
              </span>
            </div>
          </div>
        </DialogHeader>

        <DialogFooter className="flex flex-row justify-center gap-3 sm:justify-center">
          <DialogClose asChild>
            <Button size="mobile" variant="outline" className="flex-1">
              {t('no-btn')}
            </Button>
          </DialogClose>

          <Button
            variant="default"
            size="mobile"
            className="flex-1"
            onClick={onConfirm}
          >
            {t('special-election.dialog.confirm-btn')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
