import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { Button } from '@ui/button'
import { Info } from 'lucide-react'

export default function ContinueAlert() {
  const { t } = useTranslation()

  return (
    <div className="w-full space-y-6 rounded-2xl border-2 border-emerald-300 bg-emerald-100 p-3">
      <div className="flex gap-3">
        <Info className="size-8 text-emerald-800" strokeWidth={2} />
        <div className="space-y-1 text-left max-md:max-w-[80%]">
          <p className="text-xl font-medium text-emerald-800">
            {t('continue-alert.title')}
          </p>
          <p className="text-emerald-600">{t('continue-alert.description')}</p>
        </div>
      </div>

      <Button size="mobile" asChild>
        <Link to="/game">{t('continue-alert.return-btn')}</Link>
      </Button>
    </div>
  )
}
