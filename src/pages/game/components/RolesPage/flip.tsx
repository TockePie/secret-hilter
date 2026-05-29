import { useState } from 'react'
import { cx } from 'class-variance-authority'

interface Props {
  frontPart: React.ReactNode
  backPart: React.ReactNode
}

export default function Flip({ frontPart, backPart }: Props) {
  const [isFlipped, setFlipped] = useState(false)

  return (
    <div
      className="size-full perspective-midrange"
      onClick={() => setFlipped(!isFlipped)}
    >
      <div
        className={cx(
          'relative size-full transition-transform duration-500 transform-3d',
          isFlipped && 'rotate-y-180'
        )}
      >
        <div className="absolute size-full backface-hidden">{frontPart}</div>
        <div className="absolute size-full rotate-y-180 backface-hidden">
          {backPart}
        </div>
      </div>
    </div>
  )
}
