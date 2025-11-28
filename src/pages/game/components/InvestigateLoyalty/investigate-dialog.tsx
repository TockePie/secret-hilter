import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
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
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'
import type { Player } from '@/types/player'

interface InvestigateDialogProps extends Player {
  triggerComp: React.ReactElement
}

export default function InvestigateDialog({
  triggerComp,
  id,
  name,
  color,
  role
}: InvestigateDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const { t } = useTranslation()
  const { updateStatus, setInvestigatedPlayers } = useGameStore.getState()

  const handleContinue = () => {
    closeRef.current?.click()
    setInvestigatedPlayers(id)
    updateStatus('choose-cancelour')
  }

  return (
    <Dialog>
      <DialogTrigger>{triggerComp}</DialogTrigger>
      <DialogContent
        className="[&>button]:hidden"
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogTitle>
          <span className={playerTextColorClasses[color]}>{name}</span>
          {t('investigate-loyalty.dialog.title')}
        </DialogTitle>

        <h1 className={clsx(ROLE_CONFIG[role].text, 'my-10 text-center')}>
          {t(`player.role.${role}.party`)}
        </h1>

        <DialogFooter>
          <Button size="mobile" onClick={handleContinue}>
            {t('continue-btn')}
          </Button>
        </DialogFooter>

        <DialogClose className="hidden" ref={closeRef} />
      </DialogContent>
    </Dialog>
  )
}
