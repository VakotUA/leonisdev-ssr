import React, { useState } from 'react'
import style from './style.module.scss'
import { motion } from 'framer-motion'

interface Props {
  value: string
  onSelect: (params: any) => void
  options: string[]
  className?: string
  style?: React.CSSProperties
  hideOnSelect?: boolean
}

export type Ref = HTMLDivElement

export const Select = React.forwardRef<Ref, Props>((props, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      style={props.style}
      className={`${style.Select} ${props.className}`}
      ref={ref}
    >
      <div className={style.Value} onClick={() => setIsOpen(!isOpen)}>
        {props.value.toLocaleUpperCase()}
      </div>

      <ul className={`${style.Options} ${isOpen && style.Open}`}>
        {props.options?.map((item: string, index: number) => (
          <li
            key={index}
            onClick={() => {
              props.hideOnSelect && setIsOpen(false)
              props.onSelect(item)
            }}
          >
            {item.toLocaleUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  )
})

Select.displayName = 'Select'

export const MotionSelect = motion(Select)
