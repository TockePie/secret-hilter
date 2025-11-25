import PlayerListItem from '@/components/PlayerListItem'
import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

import KillDialog from './kill-dialog'

export default function Execution() {
  const { players, president } = useGameStore.getState()

  const noPresidentPlayers = players.filter((player) => player.id !== president)

  const presidentData = players.find((player) => player.id === president)

  return (
    <main className="page-main max-sm:standalone:pb-10 gap-8 pb-5">
      <div className="text-con">
        <h1 className={playerTextColorClasses[presidentData?.color ?? 'slate']}>
          {presidentData?.name}
        </h1>
        <p className="body-2">must kill a player</p>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <h4>Choose a player</h4>
        <div className="flex w-full flex-col gap-3">
          {noPresidentPlayers.map((player) => (
            <KillDialog
              triggerComp={
                <PlayerListItem
                  id={player.id}
                  name={player.name}
                  color={player.color}
                  key={player.id}
                />
              }
              {...player}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
