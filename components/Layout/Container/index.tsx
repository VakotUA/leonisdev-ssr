import React from 'react'
import style from './style.module.scss'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`${style.Container} ${className}`}>{children}</div>
}

export default Container
