import React from 'react'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import Link from 'next/link'

const CreditsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="mobile" variant="ghost">
        Credits
      </Button>
    </DialogTrigger>

    <DialogContent className="text-stone-800" showCloseButton={false}>
      <DialogTitle>Credits</DialogTitle>
      <div>
        <ul>
          <li>
            <strong>Designers:</strong> Mike Boxleiter, Tommy Maranges, Mac
            Schubert
          </li>
          <li>
            <strong>Illustrator:</strong> Mackenzie Schubert
          </li>
          <li>
            <strong>Published by:</strong> Goat, Wolf, & Cabbage LLC;
            distributed by Breaking Games
          </li>
        </ul>

        <p className="mt-3 flex flex-col gap-2">
          This game is licensed under the Creative Commons.
          <Link
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Attribution‑NonCommercial‑ShareAlike 4.0 International License
          </Link>
          You are free to share or adapt this game for non‑commercial purposes
          as long as you credit the original creators and maintain the same
          license.
        </p>
      </div>

      <DialogClose asChild>
        <Button size="mobile" variant="outline">
          Close
        </Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
)

export default CreditsDialog
