import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Container from '../Layout/Container'
import Circle from '../../assets/images/ellipse.png'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

type Step = {
  number: string
  title: string
  text: string
}

const Stepper: React.FC = () => {
  const { t } = useTranslation('magic')

  const STEPS = t<Step[]>('stepper.steps', {}, { returnObjects: true })

  return (
    <motion.section id="stepper" className={style.Stepper}>
      <div className={style.Circle}>
        <Image src={Circle} alt="circle" />
      </div>

      <Container className={style.Content}>
        <Text.H3
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.75, once: true }}
          variants={TextAnimations.bottomToTop}
          className={style.Title}
        >
          {t('stepper.title')}
        </Text.H3>
      </Container>

      <div className={style.Steps}>
        {STEPS.map((item: Step, index: number) => (
          <motion.div
            className={style.Step}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
          >
            <motion.div
              custom={1 + index}
              variants={TextAnimations.leftToRight}
            >
              <small>{item.number}</small>
              <Cross.Filled className={style.Icon} size={'80px'} />
              <div className={style.Line} />
            </motion.div>
            <Text.P
              custom={2 + index}
              variants={TextAnimations.topToBottom}
              className={style.Title}
            >
              {item.title}
            </Text.P>
            <Text.Small
              custom={3 + index}
              variants={TextAnimations.topToBottom}
            >
              {item.text}
            </Text.Small>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Stepper
