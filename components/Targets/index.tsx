import React from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import LionImage from '../../assets/images/Magic_lion_2.png'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

const Targets: React.FC = () => {
  const { t } = useTranslation('magic')

  return (
    <motion.main
      className={style.Targets}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      <Cross.Filled size="80px" className={style.Particles1} />
      <Cross.Filled size="44px" className={style.Particles2} />
      <Cross.Filled size="52px" className={style.Particles3} />
      <Cross.Outlined className={style.Particles4} />
      <Cross.Outlined className={style.Particles5} />

      <div className={style.Circle}>
        <Image src={Circle} alt="circle" />
      </div>

      <Container className={style.Content}>
        <div className={style.Greetings}>
          <Text.H5
            custom={1}
            variants={TextAnimations.leftToRight}
            className={style.Line}
          >
            {t('targets.we-code')}
          </Text.H5>
          <Text.H5
            custom={1}
            variants={TextAnimations.leftToRight}
            className={style.Line}
          >
            {t('targets.we-design')}
          </Text.H5>

          <Text.H2
            custom={3}
            variants={TextAnimations.leftToRight}
            className={style.H2}
          >
            {t('targets.title')}
          </Text.H2>
          <Text.H4
            custom={4}
            variants={TextAnimations.leftToRight}
            className={style.H4}
          >
            {t('targets.sub-title')}
          </Text.H4>

          <Text.Small
            custom={6}
            variants={TextAnimations.leftToRight}
            className={style.WeAre}
          >
            {t('targets.text')}
          </Text.Small>
        </div>
      </Container>

      <div className={style.Image}>
        <Image src={LionImage} alt="lion" />
      </div>
    </motion.main>
  )
}

export default Targets
