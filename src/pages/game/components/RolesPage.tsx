import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from '@ui/carousel'

import RolesCard from '@/components/RolesCard'
import useGameStore from '@/lib/store'

const RolesPage = () => {
  const nextButton = useRef<HTMLButtonElement>(null)
  const { players, updateStatus } = useGameStore.getState()

  const handleNext = (index: number) => () => {
    if (index === players.length - 1) {
      updateStatus('sleep-stage')
    } else {
      nextButton.current?.click()
    }
  }

  return (
    <main className="w-full px-6 pb-[140px]">
      <Carousel className="w-full" opts={{ watchDrag: false }}>
        <CarouselContent>
          {players.map((player, index) => (
            <CarouselItem key={player.id}>
              <RolesCard nextFn={handleNext(index)} {...player} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden" ref={nextButton} />
      </Carousel>
    </main>
  )
}

export default RolesPage
