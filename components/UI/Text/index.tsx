import React from 'react'
import style from './style.module.scss'

import { motion } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  className?: string
}

export const tp = React.forwardRef<HTMLParagraphElement, Props>(
  ({ children, className }, ref) => (
    <p ref={ref} className={`${style.p} ${className}`}>
      {children}
    </p>
  )
)
tp.displayName = 'tp'
export const P = motion(tp)

export const th1 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ children, className }, ref) => (
    <h1 ref={ref} className={`${style.h1} ${className}`}>
      {children}
    </h1>
  )
)
th1.displayName = 'th1'
export const H1 = motion(th1)

export const th2 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ children, className }, ref) => (
    <h2 ref={ref} className={`${style.h2} ${className}`}>
      {children}
    </h2>
  )
)
th2.displayName = 'th2'
export const H2 = motion(th2)

export const th3 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ children, className }, ref) => (
    <h3 ref={ref} className={`${style.h3} ${className}`}>
      {children}
    </h3>
  )
)
th3.displayName = 'th3'
export const H3 = motion(th3)

export const th4 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ children, className }, ref) => (
    <h4 ref={ref} className={`${style.h4} ${className}`}>
      {children}
    </h4>
  )
)
th4.displayName = 'th4'
export const H4 = motion(th4)

export const th5 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ children, className }, ref) => (
    <h5 ref={ref} className={`${style.h5} ${className}`}>
      {children}
    </h5>
  )
)
th5.displayName = 'th5'
export const H5 = motion(th5)

export const tsamll = React.forwardRef<HTMLParagraphElement, Props>(
  ({ children, className }, ref) => (
    <p ref={ref} className={`${style.small} ${className}`}>
      {children}
    </p>
  )
)
tsamll.displayName = 'tsamll'
export const Small = motion(tsamll)

export const Text = { P, H1, H2, H3, H4, H5, Small }
