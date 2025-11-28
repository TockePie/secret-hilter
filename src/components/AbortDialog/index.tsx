import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'

import useGameStore from '@/lib/store'

interface AbortDialogProps {
  triggerComp: React.ReactNode
  onAbort?: () => void
}

export default function AbortDialog({
  triggerComp,
  onAbort
}: AbortDialogProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const abortGame = useGameStore((state) => state.abortGame)

  const handleAbort = () => {
    abortGame()
    sessionStorage.removeItem('game-storage')
    onAbort?.()
    navigate('/', { replace: true })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComp}</DialogTrigger>

      <DialogContent
        className="gap-10 text-stone-800"
        aria-describedby="abort game dialog"
        showCloseButton={false}
      >
        <DialogTitle>{t('abort-dialog.title')}</DialogTitle>

        <DialogDescription className="body-2">
          {t('abort-dialog.description')}
        </DialogDescription>

        <DialogFooter className="flex flex-col flex-wrap gap-3">
          <Button variant="destructive" size="mobile" onClick={handleAbort}>
            {t('abort-dialog.yes-btn')}
          </Button>
          <DialogClose asChild>
            <Button variant="ghost" size="mobile">
              {t('no-btn')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
