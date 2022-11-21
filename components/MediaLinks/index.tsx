import React from 'react'
import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import style from './style.module.scss'

import EyesImage from '../../assets/images/lion_eyes.jpg'

import Telegram from '../../assets/images/telegram.png'
import Instagram from '../../assets/images/instagram.png'
import LinkedIn from '../../assets/images/linkedin.png'
import Facebook from '../../assets/images/facebook.png'
import Twitter from '../../assets/images/twitter.png'
import YouTube from '../../assets/images/youtube.png'
import { Cross } from '../UI/Particles'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

const Media: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <motion.section
      className={style.Media}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
    >
      <Container className={style.Content}>
        {/* <Cross.Filled size="60px" className={style.Particles} /> */}
        <Text.H3 custom={1} variants={TextAnimations.bottomToTop}>
          {t('media.join')}
        </Text.H3>
      </Container>

      <div className={style.Background}>
        <Image
          src={EyesImage}
          alt="lion"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
      </div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className={style.Links}
      >
        <motion.li custom={1} variants={TextAnimations.bottomToTop}>
          <a href="#">
            <Image src={Telegram} alt="telegram" />
          </a>
        </motion.li>
        <motion.li custom={2} variants={TextAnimations.bottomToTop}>
          <a href="#">
            <Image src={Instagram} alt="instagram" />
          </a>
        </motion.li>
        <motion.li custom={3} variants={TextAnimations.bottomToTop}>
          <a href="#">
            <Image src={LinkedIn} alt="linkedin" />
          </a>
        </motion.li>
        <motion.li custom={3} variants={TextAnimations.bottomToTop}>
          <a href="#">
            <Image src={Facebook} alt="facebook" />
          </a>
        </motion.li>
        <motion.li custom={2} variants={TextAnimations.bottomToTop}>
          <a href="#">
            <Image src={Twitter} alt="twitter" />
          </a>
        </motion.li>
        <motion.li custom={1} variants={TextAnimations.bottomToTop}>
          <a href="#">
            <Image src={YouTube} alt="youtube" />
          </a>
        </motion.li>
      </motion.ul>
    </motion.section>
  )
}

export default Media
