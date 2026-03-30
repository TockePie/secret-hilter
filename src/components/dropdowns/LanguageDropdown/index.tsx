import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@ui/dropdown-menu'
import { Globe } from 'lucide-react'

import { LANGUAGES } from '@/common/constants'

export default function LanguageDropdown() {
  const { i18n } = useTranslation()

  const handleChoose = (lang: keyof typeof LANGUAGES) => () => {
    i18n.changeLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Globe className="size-7" strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 rounded-xl">
        {Object.entries(LANGUAGES).map(([key, value]) => (
          <DropdownMenuItem
            key={key}
            className={
              i18n.language === key ? 'bg-accent text-accent-foreground' : ''
            }
            onSelect={handleChoose(key as keyof typeof LANGUAGES)}
          >
            {value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
