import type { MotionWrapperProps } from '@/types/motion-wrapper'

import BounceIn from './bounce-in'
import FadeIn from './fade-in'
import PageTransition from './page-transition'

export default function MotionWrapper({ type, children }: MotionWrapperProps) {
  switch (type) {
    case 'page-transition': {
      return <PageTransition>{children}</PageTransition>
    }
    case 'bounce-in': {
      return <BounceIn>{children}</BounceIn>
    }
    case 'fade-in': {
      return <FadeIn>{children}</FadeIn>
    }
  }
}
