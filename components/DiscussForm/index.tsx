import React from 'react'
import style from './style.module.scss'

import { Cross } from '../UI/Particles'
import { ContactForm as Form } from '../UI/Form'

import Circle from '../../assets/images/ellipse.png'

import { motion } from 'framer-motion'

import Image from 'next/image'

const modalAnimation = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

interface Props {
  isModalVisible?: boolean
  setIsModalVisible: (state: boolean) => void
}

const DiscussModal: React.FC<Props> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <motion.div
      className={style.Form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={style.Circle}>
        <Image src={Circle} alt="circle" />
      </div>

      <div
        className={style.Background}
        onClick={() => setIsModalVisible(false)}
      />

      <motion.div
        className={style.Container}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Form />
        <div className={style.Button} onClick={() => setIsModalVisible(false)}>
          <Cross.Outlined size="40px" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DiscussModal
