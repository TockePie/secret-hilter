import { Button } from '@ui/button'

import { SLEEP_STAGE_INSTR } from '@/common/constants'
import useGameStore from '@/lib/store'

export default function SleepStagePage() {
  const updateStatus = useGameStore((state) => state.updateStatus)

  return (
    <>
      <main className="flex w-full flex-col items-center gap-4 px-6 pt-3 pb-[140px]">
        <span className="text-8xl">😴</span>
        <h4 className="text-center">
          Get ready for the next stage!
          <br /> Instruction for All Players:
        </h4>
        <div>
          {SLEEP_STAGE_INSTR.smallTeam.split('\n').map((line, idx) => (
            <div key={idx} className="body-2 m-1">
              {line.startsWith('(') && line.endsWith(')') ? (
                <i>{line}</i>
              ) : (
                line
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="max-sm:standalone:pb-10 fixed inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-stone-100/90 p-6 pt-3 backdrop-blur-md">
        <Button
          className="max-w-134"
          size="mobile"
          onClick={() => updateStatus('choose-cancelour')}
        >
          Next
        </Button>
      </footer>
    </>
  )
}
