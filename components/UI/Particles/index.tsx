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
  <div className={`${style.Filled} ${className}`}>
    <Image src={CrossFilled} alt="filled" width={size} height={size} />
  </div>
)

const Outlined: React.FC<Props> = ({ size = '32px', className }) => (
  <div className={`${style.Outlined} ${className}`}>
    <Image src={CrossOutlined} alt="outlined" width={size} height={size} />
  </div>
)

export const Cross = { Filled, Outlined }
