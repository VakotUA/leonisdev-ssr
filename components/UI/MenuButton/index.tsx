import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { menuSlice } from '../../../store/reducers/menu'
import style from './style.module.scss'

import { useLockedBody } from '../../../hooks/useLockedBody'

export const MenuButton: React.FC<{ className?: string }> = ({ className }) => {
  const { isActive } = useAppSelector((state) => state.menu)
  const dispatch = useAppDispatch()
  const { toggleMenu } = menuSlice.actions

  const [locked, setLocked] = useLockedBody()
  useEffect(() => {
    setLocked(isActive)
  }, [isActive])

  return (
    <div
      className={` ${style.MenuButton} ${
        isActive && style.Active
      } ${className}`}
      onClick={() => dispatch(toggleMenu(!isActive))}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
