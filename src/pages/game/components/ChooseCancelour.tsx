import clsx from 'clsx'

import useGameStore from '@/lib/store'
import { playerTextColorClasses } from '@/styles/color-classes'

const ChooseCancelourPage = () => {
  const { players, president } = useGameStore.getState()

  const presidentData = players.find((player) => player.id === president)

  console.log({ players, president })

  return (
    <main className="flex w-full flex-col items-center gap-4 px-6 pb-[140px]">
      <div className="flex flex-col items-center gap-3">
        <h2
          className={clsx(
            playerTextColorClasses[presidentData?.color],
            'text-5xl font-bold'
          )}
        >
          {presidentData?.name}
        </h2>
        <p className="text-xl text-stone-700">is a president candidate</p>
      </div>
      <p className="text-xl font-medium text-stone-700">Choose a cancelour</p>
    </main>
  )
}

export default ChooseCancelourPage
