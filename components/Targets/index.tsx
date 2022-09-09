import React from 'react'
import style from './style.module.scss'
import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import LionImage from '../../assets/images/lion_1.png'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Image from 'next/image'

const Targets: React.FC = () => {
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
        <div />
        <div className={style.Greetings}>
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

          <Text.H2
            custom={3}
            variants={TextAnimations.leftToRight}
            className={style.H2}
          >
            WE EXTEND
          </Text.H2>
          <Text.H4
            custom={4}
            variants={TextAnimations.leftToRight}
            className={style.H4}
          >
            YOUR BUSINESS TO DIGITAL
          </Text.H4>

          <Text.Small
            custom={6}
            variants={TextAnimations.leftToRight}
            className={style.WeAre}
          >
            OUR MAIN AREAS ARE{' '}
            <b>
              DESIGN AUTOMATION, GRAPHIC DESIGN, WEBSITE DEVELOPMENT, URBAN
              DESIGN, ARCHITECTURE, ENVIRONMENTAL DESIGN, NAVIGATION SYSTEMS,
              INDUSTRIAL DESIGN, INTERFACE DESIGN, PETTERN CREATION, BOOK
              PUBLISHING.
            </b>{' '}
            WE ARE A VARY CREATIVE AND VARY TECHNOLOGICAL COMPANY, COMBINING
            RESEARCH AND ANALUTICS WITH MIND-BLOWING IDEAS.
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
