import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import {
  Dialog,
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
  autoOpen?: boolean
  onInvestigate?: () => void
}

export default function InvestigateDialog({
  triggerComp,
  name,
  color,
  role,
  autoOpen = false,
  onInvestigate
}: InvestigateDialogProps) {
  const [open, setOpen] = useState(autoOpen)
  const { t } = useTranslation()

  const handleContinue = () => {
    onInvestigate?.()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{triggerComp}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
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
      </DialogContent>
    </Dialog>
  )
}
