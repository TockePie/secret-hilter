import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@ui/dropdown-menu'
import { Globe } from 'lucide-react'

const LANGUAGES = {
  en: 'English',
  ua: 'Українська'
}

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
      <DropdownMenuContent className="w-36">
        {Object.entries(LANGUAGES).map(([key, value]) => (
          <DropdownMenuItem
            onSelect={handleChoose(key as keyof typeof LANGUAGES)}
          >
            {value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
