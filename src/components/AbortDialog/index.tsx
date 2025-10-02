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
}

const AbortDialog: React.FC<AbortDialogProps> = ({ triggerComp }) => {
  const navigate = useNavigate()
  const abortGame = useGameStore((state) => state.abortGame)

  const handleAbort = () => {
    abortGame()
    navigate('/', { replace: true })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComp}</DialogTrigger>

      <DialogContent
        className="text-stone-800"
        aria-describedby="abort game dialog"
        showCloseButton={false}
      >
        <DialogTitle>Do you really want to abort this game?</DialogTitle>

        <DialogDescription>
          All the progress will be terminated
        </DialogDescription>

        <DialogFooter className="flex flex-col gap-3">
          <Button variant="destructive" size="mobile" onClick={handleAbort}>
            Abort
          </Button>
          <DialogClose asChild>
            <Button variant="ghost" size="mobile">
              No
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AbortDialog
