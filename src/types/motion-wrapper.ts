export interface MotionWrapperComponent {
  children: React.ReactNode
}

export interface MotionWrapperProps extends MotionWrapperComponent {
  type: 'page-transition' | 'bounce-in' | 'fade-in'
}
