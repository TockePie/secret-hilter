import { Link } from 'react-router'
import { Info } from 'lucide-react'

import { Button } from '../ui/button'

export default function ContinueAlert() {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border-2 border-emerald-300 bg-emerald-100 p-3">
      <div className="flex gap-3">
        <Info
          className="size-8"
          color="var(--color-emerald-800)"
          strokeWidth={2.5}
        />
        <div className="flex flex-col gap-2 text-left max-md:max-w-[80%]">
          <p className="text-xl font-medium text-emerald-800">
            The game is still going.
          </p>
          <p className="text-emerald-600">Press to return to your game</p>
        </div>
      </div>

      <Button size="mobile" asChild>
        <Link to="/game">Return </Link>
      </Button>
    </div>
  )
}
