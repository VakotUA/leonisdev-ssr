import React from 'react'
import style from './style.module.scss'

import { motion } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  className?: string
}

export const P = motion(
  React.forwardRef<HTMLParagraphElement, Props>(
    ({ children, className }, ref) => (
      <p ref={ref} className={`${style.p} ${className}`}>
        {children}
      </p>
    )
  )
)
export const H1 = motion(
  React.forwardRef<HTMLHeadingElement, Props>(
    ({ children, className }, ref) => (
      <h1 ref={ref} className={`${style.h1} ${className}`}>
        {children}
      </h1>
    )
  )
)
export const H2 = motion(
  React.forwardRef<HTMLHeadingElement, Props>(
    ({ children, className }, ref) => (
      <h2 ref={ref} className={`${style.h2} ${className}`}>
        {children}
      </h2>
    )
  )
)
export const H3 = motion(
  React.forwardRef<HTMLHeadingElement, Props>(
    ({ children, className }, ref) => (
      <h3 ref={ref} className={`${style.h3} ${className}`}>
        {children}
      </h3>
    )
  )
)
export const H4 = motion(
  React.forwardRef<HTMLHeadingElement, Props>(
    ({ children, className }, ref) => (
      <h4 ref={ref} className={`${style.h4} ${className}`}>
        {children}
      </h4>
    )
  )
)

export const H5 = motion(
  React.forwardRef<HTMLHeadingElement, Props>(
    ({ children, className }, ref) => (
      <h5 ref={ref} className={`${style.h5} ${className}`}>
        {children}
      </h5>
    )
  )
)
export const Small = motion(
  React.forwardRef<HTMLParagraphElement, Props>(
    ({ children, className }, ref) => (
      <p ref={ref} className={`${style.small} ${className}`}>
        {children}
      </p>
    )
  )
)

export const Text = { P, H1, H2, H3, H4, H5, Small }
