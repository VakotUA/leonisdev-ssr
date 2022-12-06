import React, { useState, useEffect } from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { MotionButton } from '../UI/Button'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import GIF from '../../assets/images/lion2.gif'

import { motion, AnimatePresence } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import DiscussModal from '../DiscussForm'
import { useLockedBody } from '../../hooks/useLockedBody'

import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

const Welcome: React.FC = () => {
  const { t } = useTranslation('home')

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const [locked, setLocked] = useLockedBody()
  useEffect(() => {
    setLocked(isModalVisible)
  }, [isModalVisible, setLocked])

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isModalVisible && (
          <DiscussModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
      </AnimatePresence>

      <motion.main
        className={style.Welcome}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
      >
        <Container className={style.Content}>
          <div className={style.Greetings}>
            <div />
            <div>
              <Text.H5
                custom={1}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                {t('welcome.we-code')}
              </Text.H5>
              <Text.H5
                custom={1}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                {t('welcome.we-design')}
              </Text.H5>

              <Text.H1 custom={3} variants={TextAnimations.leftToRight}>
                {t('welcome.title')}
              </Text.H1>
              <Text.H2 custom={4} variants={TextAnimations.leftToRight}>
                {t('welcome.studio')}
              </Text.H2>

              <Text.H4
                custom={5}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                {t('welcome.for-you')}
              </Text.H4>
            </div>

            <MotionButton
              custom={6}
              variants={TextAnimations.leftToRight}
              className={style.Button}
              onClick={() => setIsModalVisible(!isModalVisible)}
            >
              {t('welcome.button')}
            </MotionButton>
          </div>

          <div className={style.ImageBlock}>
            <motion.div
              animate={{ y: ['50px', '-10px', '30px', '-20px', '50px'] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                type: 'spring',
                damping: 25,
                stiffness: 500,
                delay: 1.2,
              }}
            >
              <Image src={GIF} alt="lion" priority />
            </motion.div>
          </div>
        </Container>

        <Cross.Filled size="80px" className={style.Particles1} />
        <Cross.Filled size="44px" className={style.Particles2} />
        <Cross.Filled size="52px" className={style.Particles3} />
        <Cross.Outlined className={style.Particles4} />
        <Cross.Outlined className={style.Particles5} />
        <Cross.Filled size="80px" className={style.Particles6} />

        <div className={style.Circle}>
          <Image src={Circle} alt="circle" />
        </div>
      </motion.main>
    </>
  )
}

export default Welcome
