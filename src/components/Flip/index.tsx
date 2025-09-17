import React, { useState } from 'react'
import clsx from 'clsx'

interface FlipProps {
  frontPart: React.ReactNode
  backPart: React.ReactNode
}

const Flip: React.FC<FlipProps> = ({ frontPart, backPart }) => {
  const [isFlipped, setFlipped] = useState(false)

  return (
    <div
      className="size-full perspective-midrange"
      onClick={() => setFlipped(!isFlipped)}
    >
      <div
        className={clsx(
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

export default Flip
