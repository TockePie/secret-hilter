import { motion } from 'framer-motion'

import type { MotionWrapperComponent } from '@/types/motion-wrapper'

export default function FadeIn({ children }: MotionWrapperComponent) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="size-full"
    >
      {children}
    </motion.div>
  )
}
