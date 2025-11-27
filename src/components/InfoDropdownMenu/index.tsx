import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@ui/dropdown-menu'
import { BookOpen, Github, Info, Users } from 'lucide-react'

import CreditsDialog from '../CreditsDialog'

export default function InfoDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Info className="size-7" strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
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
          Rules
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <CreditsDialog
            triggerComp={
              <div className="flex items-center gap-2">
                <Users />
                Credits
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
