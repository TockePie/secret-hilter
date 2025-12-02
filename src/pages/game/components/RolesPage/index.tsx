import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from '@ui/carousel'

import useGameStore from '@/lib/store'
import RolesCard from '@/pages/game/components/RolesPage/roles-card'

export default function RolesPage() {
  const nextButton = useRef<HTMLButtonElement>(null)
  const { players, uiState, updateStatus, setUIState } = useGameStore.getState()

  const handleNext = (index: number) => () => {
    setUIState({ lastViewedRoleIndex: index })

    if (index === players.length - 1) {
      updateStatus('sleep-stage')

      setTimeout(() => setUIState({ lastViewedRoleIndex: null }), 1000)
    } else {
      nextButton.current?.click()
    }
  }

  const startIndex =
    uiState.lastViewedRoleIndex != null ? uiState.lastViewedRoleIndex + 1 : 0

  return (
    <main className="page-main pb-6">
      <Carousel className="w-full" opts={{ watchDrag: false }}>
        <CarouselContent>
          {players.map((player, index) => (
            <CarouselItem key={player.id} hidden={index < startIndex}>
              <RolesCard nextFn={handleNext(index)} {...player} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden" ref={nextButton} />
      </Carousel>
    </main>
  )
}
