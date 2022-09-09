import { motion } from 'framer-motion'
import React from 'react'
import style from './style.module.scss'

interface Props {
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

export type Ref = HTMLButtonElement

export const Button = React.forwardRef<Ref, Props>(
  ({ onClick, type, children, className }, ref) => (
    <button
      ref={ref}
      className={`${style.Button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
)
Button.displayName = 'Button'

export const MotionButton = motion(Button)
