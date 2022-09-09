import React, { useState, useEffect } from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { MotionButton } from '../UI/Button'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import LionImage1 from '../../assets/images/frames/1.png'
import LionImage2 from '../../assets/images/frames/2.png'
import LionImage3 from '../../assets/images/frames/3.png'
import LionImage4 from '../../assets/images/frames/4.png'
import LionImage5 from '../../assets/images/frames/5.png'
import LionImage6 from '../../assets/images/frames/6.png'
import LionImage7 from '../../assets/images/frames/7.png'

import { motion, AnimatePresence } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import DiscussModal from '../DiscussForm'
import { useLockedBody } from '../../hooks/useLockedBody'

import Image from 'next/image'

const Welcome: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const [locked, setLocked] = useLockedBody()
  useEffect(() => {
    setLocked(isModalVisible)
  }, [isModalVisible, setLocked])

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
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
                WE ARE CODE
              </Text.H5>
              <Text.H5
                custom={1}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                WE ARE DESIGN
              </Text.H5>

              <Text.H1 custom={3} variants={TextAnimations.leftToRight}>
                LEONIS
              </Text.H1>
              <Text.H2 custom={4} variants={TextAnimations.leftToRight}>
                DEV STUDIO
              </Text.H2>

              <Text.H4
                custom={5}
                variants={TextAnimations.leftToRight}
                className={style.Line}
              >
                WE CREATE FOR YOU
              </Text.H4>
            </div>

            <MotionButton
              custom={6}
              variants={TextAnimations.leftToRight}
              className={style.Button}
              onClick={() => setIsModalVisible(!isModalVisible)}
            >
              DISCUSS THE PROJECT
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
              <Image src={LionImage1} alt="lion" />
            </motion.div>

            <motion.div
              animate={{ y: ['40px', '-10px', '30px', '-20px', '40px'] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                type: 'spring',
                damping: 25,
                stiffness: 500,
                delay: 0.8,
              }}
            >
              <Image src={LionImage2} alt="lion" />
            </motion.div>
            <motion.div
              animate={{ y: ['30px', '-10px', '30px', '-20px', '30px'] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                type: 'spring',
                damping: 25,
                stiffness: 500,
                delay: 0.4,
              }}
            >
              <Image src={LionImage3} alt="lion" />
            </motion.div>
            <motion.div
              animate={{ y: ['20px', '-10px', '30px', '-20px', '20px'] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                type: 'spring',
                damping: 25,
                stiffness: 500,
                delay: 0,
              }}
            >
              <Image src={LionImage4} alt="lion" />
            </motion.div>
            <motion.div
              animate={{ y: ['30px', '-10px', '30px', '-20px', '30px'] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                type: 'spring',
                damping: 25,
                stiffness: 500,
                delay: 0.4,
              }}
            >
              <Image src={LionImage5} alt="lion" />
            </motion.div>
            <motion.div
              animate={{ y: ['40px', '-10px', '30px', '-20px', '40px'] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                type: 'spring',
                damping: 25,
                stiffness: 500,
                delay: 0.8,
              }}
            >
              <Image src={LionImage6} alt="lion" />
            </motion.div>
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
              <Image src={LionImage7} alt="lion" />
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
