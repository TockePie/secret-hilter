import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@ui/dropdown-menu'
import { BookOpen, Github, Info, Users } from 'lucide-react'

import CreditsDialog from '@/components/dialogs/CreditsDialog'

export default function InfoDropdownMenu() {
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Info className="size-7" strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 rounded-xl">
        <DropdownMenuItem
          onClick={() =>
            window.open(
              'https://www.secrethitler.com/assets/Secret_Hitler_Rules.pdf',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          <BookOpen />
          {t('info-dropdown.rules')}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <CreditsDialog
            triggerComp={
              <div className="flex items-center gap-2">
                <Users />
                {t('info-dropdown.credits')}
              </div>
            }
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Github /> GitHub
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
