import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { AlertTriangle } from 'lucide-react'

interface AbortDialogProps {
  triggerComp: React.ReactNode
  onAbort?: () => void
}

export default function AbortDialog({
  triggerComp,
  onAbort
}: AbortDialogProps) {
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComp}</DialogTrigger>

      <DialogContent
        className="max-w-[400px] gap-6 text-stone-800"
        aria-describedby="abort-game-description"
        showCloseButton={false}
      >
        <DialogHeader className="flex flex-col items-center gap-6 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle size={32} />
          </div>

          <div className="space-y-1 text-center">
            <DialogTitle className="text-2xl font-bold">
              {t('abort-dialog.title')}
            </DialogTitle>

            <DialogDescription
              id="abort-game-description"
              className="text-stone-500"
            >
              {t('abort-dialog.description')}
            </DialogDescription>
          </div>
        </DialogHeader>

        <DialogFooter className="flex flex-row justify-center gap-3 sm:justify-center">
          <DialogClose asChild>
            <Button size="mobile" variant="outline" className="flex-1">
              {t('no-btn')}
            </Button>
          </DialogClose>

          <Button
            size="mobile"
            variant="destructive"
            className="flex-1"
            onClick={onAbort}
          >
            {t('abort-dialog.yes-btn')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
