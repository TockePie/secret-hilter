import useGameStore from '@/lib/store'

const ConfirmCandidates = () => {
  const { players, candidatePresident, candidateChancellor } =
    useGameStore.getState()

  const presidentObj = players.find((p) => p.id === candidatePresident)
  const chancellorObj = players.find((p) => p.id === candidateChancellor)

  const candidates = {
    president: presidentObj,
    chancellor: chancellorObj
  }

  return (
    <main className="flex w-full flex-col items-center gap-4 px-6">
      <p className="text-center text-2xl font-medium">
        The government for the next term:
      </p>

      <div className="rounded-md p-3 shadow-xl">
        <p>{candidates.president?.name} as president</p>
        <p>{candidates.chancellor?.name} as chancelour</p>
      </div>
    </main>
  )
}

export default ConfirmCandidates
