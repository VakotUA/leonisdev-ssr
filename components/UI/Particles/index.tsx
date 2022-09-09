import React from 'react'
import style from './style.module.scss'

import CrossFilled from '../../../assets/svgs/filled.svg'
import CrossOutlined from '../../../assets/svgs/outlined.svg'

import Image from 'next/image'

interface Props {
  size?: string
  className?: string
}

const Filled: React.FC<Props> = ({ size = '32px', className }) => (
  <div className={`${style.Filled} ${className}`} style={{ width: size }}>
    <Image src={CrossFilled} alt="filled" />
  </div>
)

const Outlined: React.FC<Props> = ({ size = '32px', className }) => (
  <div className={`${style.Outlined} ${className}`} style={{ width: size }}>
    <Image src={CrossOutlined} alt="outlined" />
  </div>
)

export const Cross = { Filled, Outlined }
