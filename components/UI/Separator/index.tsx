import React from 'react'
import style from './style.module.scss'

interface Props {
  className?: string
}

export const Separator: React.FC<Props> = ({ className }) => {
  return <div className={`${style.Separator} ${className}`} />
}
