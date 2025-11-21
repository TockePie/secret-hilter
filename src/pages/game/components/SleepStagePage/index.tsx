import { Button } from '@ui/button'

import useGameStore from '@/lib/store'

import { SLEEP_STAGE_INSTR } from './constants'
import InstructionCard from './instruction-card'

export default function SleepStagePage() {
  const { players, updateStatus } = useGameStore.getState()

  const content = Object.entries(
    players.length >= 7
      ? SLEEP_STAGE_INSTR.bigTeam
      : SLEEP_STAGE_INSTR.smallTeam
  ).map(([key, stage]) => (
    <InstructionCard
      number={Number(key)}
      key={key}
      title={stage.title}
      content={stage.content}
    />
  ))

  return (
    <>
      <main className="page-main gap-6 pb-35">
        <span className="text-8xl">😴</span>
        <h4>
          Get ready for the next stage!
          <br /> Instruction for All Players:
        </h4>
        <div className="flex flex-col gap-5">{content}</div>
      </main>

      <footer className="fixed-bottom">
        <Button size="mobile" onClick={() => updateStatus('choose-cancelour')}>
          Next
        </Button>
      </footer>
    </>
  )
}
