import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'

import Paw from '../../assets/images/lapka.png'
import Lion from '../../assets/images/lion_foot.jpg'
import FormLion from '../../assets/images/lion_contacts.png'

import Container from '../Layout/Container'

import { ContactForm as Form } from '../UI/Form'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'
import { Cross } from '../UI/Particles'
import Image from 'next/image'

const Contacts: React.FC = () => {
  return (
    <motion.footer
      id="contacts"
      className={style.Contacts}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <motion.div
          className={style.Content}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Text.H3 custom={1} variants={TextAnimations.leftToRight}>
            GET IN TOUCH
          </Text.H3>
          <Text.H5 custom={2} variants={TextAnimations.leftToRight}>
            LET&apos;S MAKE GREAT THINGS HAPPEN
          </Text.H5>
        </motion.div>
      </Container>

      <div className={style.Collumns}>
        <motion.div
          className={style.Contact}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <div>
            <motion.span custom={1} variants={TextAnimations.bottomToTop}>
              <Image src={Paw} alt="paw" />
              <Text.P custom={1} variants={TextAnimations.bottomToTop}>
                <a href="tel:+380662047960">+38 (066) 204 79 60</a>
              </Text.P>
            </motion.span>
            <motion.span custom={2} variants={TextAnimations.bottomToTop}>
              <Image src={Paw} alt="paw" />
              <Text.P>
                <a href="tel:+380662047960">+38 (066) 204 79 60</a>
              </Text.P>
            </motion.span>
            <motion.span custom={3} variants={TextAnimations.bottomToTop}>
              <Image src={Paw} alt="paw" />
              <Text.P>
                <a href="mailto:contact@leonis.dev">CONTACT@LEONIS.DEV</a>
              </Text.P>
            </motion.span>
          </div>
          <div className={style.Image}>
            <Image src={Lion} alt="lion" />
          </div>
        </motion.div>

        <motion.div
          className={style.Form}
          variants={TextAnimations.rightToLeft}
        >
          <div className={style.Image}>
            <Image height={320} src={FormLion} alt="lion" />
          </div>

          <Cross.Filled size="64px" className={style.Particles} />
          <Form />
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Contacts
