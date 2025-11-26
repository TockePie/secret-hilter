import { useRef } from 'react'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import clsx from 'clsx'

import { ROLE_CONFIG } from '@/common/constants'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'

interface InvestigateDialogProps extends Player {
  triggerComp: React.ReactElement
}

//TODO: remove close button
export default function InvestigateDialog({
  triggerComp,
  name,
  color,
  role
}: InvestigateDialogProps) {
  const closeRef = useRef(null)

  const handleContinue = () => {}

  return (
    <Dialog>
      <DialogTrigger>{triggerComp}</DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <span className={playerTextColorClasses[color]}>{name}</span>
          's party membership
        </DialogTitle>

        <h1 className={clsx(ROLE_CONFIG[role].text, 'my-10 text-center')}>
          {ROLE_CONFIG[role].party}
        </h1>

        <DialogFooter>
          <Button size="mobile" onClick={handleContinue}>
            Continue
          </Button>
        </DialogFooter>

        <DialogClose className="hidden" ref={closeRef} />
      </DialogContent>
    </Dialog>
  )
}
