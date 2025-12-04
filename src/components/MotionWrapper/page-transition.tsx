import { useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'

import type { MotionWrapperComponent } from '@/types/motion-wrapper'

export default function PageTransition({ children }: MotionWrapperComponent) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.3 }}
        className="flex w-full grow flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
