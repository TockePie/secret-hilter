import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { Info } from 'lucide-react'

interface Props {
  triggerComp: React.ReactNode
}

const CREDITS_PEOPLE = [
  ['Designers', 'Mike Boxleiter, Tommy Maranges, Mac Schubert'],
  ['Illustrator', 'Mackenzie Schubert'],
  ['Published by', 'Goat, Wolf, & Cabbage LLC; Distributed by Breaking Games']
]

export default function CreditsDialog({ triggerComp }: Props) {
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComp}</DialogTrigger>

      <DialogContent
        className="max-w-100 gap-6 text-stone-800"
        aria-describedby="credits-description"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t('credits-dialog.title')}
          </DialogTitle>
        </DialogHeader>

        <div id="credits-description" className="space-y-6">
          <ul className="space-y-4 text-sm">
            {CREDITS_PEOPLE.map(([type, people], index) => (
              <li key={index} className="flex flex-col gap-1">
                <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
                  {type}
                </span>
                <span className="text-base font-medium">{people}</span>
              </li>
            ))}

            <Link
              to="https://www.secrethitler.com/"
              className="mt-1 text-blue-600 hover:underline"
            >
              Visit Official Website →
            </Link>
          </ul>

          <div className="space-y-2 rounded-xl bg-stone-100 p-4 leading-relaxed text-stone-600">
            <p className="flex items-center gap-2 font-semibold">
              <Info size={16} strokeWidth={2.5} /> Creative Commons License
            </p>
            <p>
              This game is licensed under the
              <Link
                to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noreferrer"
                className="mx-1 font-bold text-blue-600 hover:underline"
              >
                Attribution‑NonCommercial‑ShareAlike 4.0 International
              </Link>
              . You are free to share or adapt this game for non‑commercial
              purposes under original credit.
            </p>
          </div>
        </div>

        <DialogClose asChild>
          <Button size="mobile" variant="outline">
            {t('credits-dialog.close-btn')}
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
