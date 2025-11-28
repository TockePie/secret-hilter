import { useTranslation } from 'react-i18next'
import { TriangleAlert } from 'lucide-react'

export default function ElectionAlert() {
  const { t } = useTranslation()

  return (
    <div className="mt-5 flex gap-3 rounded-2xl border-2 border-amber-300 bg-amber-100 p-3">
      <TriangleAlert
        className="size-8"
        color="var(--color-amber-800)"
        strokeWidth={2.5}
      />

      <p className="text-left text-xl font-medium text-amber-800 max-md:max-w-[80%]">
        {t('confirm-candidates-page.election-alert')}
      </p>
    </div>
  )
}
