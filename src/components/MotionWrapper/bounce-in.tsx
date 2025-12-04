import { motion } from 'framer-motion'

import type { MotionWrapperComponent } from '@/types/motion-wrapper'

export default function BounceIn({ children }: MotionWrapperComponent) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.2, bounce: 0.4 }
      }}
      className="size-full"
    >
      {children}
    </motion.div>
  )
}
