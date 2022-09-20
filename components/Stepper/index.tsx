import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'
import { Cross } from '../UI/Particles'
import Container from '../Layout/Container'
import Circle from '../../assets/images/ellipse.png'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Image from 'next/image'

const Stepper: React.FC = () => {
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
          HOW DOES THE MAGIC HAPPEN?
        </Text.H3>
      </Container>

      <div className={style.Steps}>
        <motion.div
          className={style.Step}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div custom={1} variants={TextAnimations.leftToRight}>
            <small>01</small>
            <Cross.Filled className={style.Icon} size={'80px'} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={2}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            PREPARATION
          </Text.P>
          <Text.Small custom={3} variants={TextAnimations.topToBottom}>
            This is the very start. We are getting known of each other, setup
            communication, discuss general goals and requirements of the
            project. The key point is to mark down the value that the project is
            expected to bring you and plot user scenarios along with designer
            and quality engineer. It’s important as these are two persons who
            create and validate the look-and-feel of the creation. Also schedule
            and terms are set here.
          </Text.Small>
        </motion.div>

        <motion.div
          className={style.Step}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div custom={2} variants={TextAnimations.leftToRight}>
            <small>02</small>
            <Cross.Filled className={style.Icon} size={'80px'} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={3}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            DESIGN
          </Text.P>
          <Text.Small custom={4} variants={TextAnimations.topToBottom}>
            Beauty is being born here. We believe that tools are used by people,
            that is why we create user experience driven designs, that touches
            target audience exactly. We also believe your project should make
            difference. That is why we make designs unique, bringing a special
            imprint of main idea to the visual look. Quality control also starts
            here.
          </Text.Small>
        </motion.div>

        <motion.div
          className={style.Step}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div custom={3} variants={TextAnimations.topToBottom}>
            <small>03</small>
            <Cross.Filled className={style.Icon} size={'80px'} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={4}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            DEVELOPMENT
          </Text.P>
          <Text.Small custom={5} variants={TextAnimations.topToBottom}>
            Meat of functionality is being grown on the basis of written
            scenarios and design. Functionality is usually separated into parts
            to allow partial releases and earlier possibility of going live with
            minimum viable product. And to also provide updates on a regular
            basis. Time is the factor here. Also quality is. So it’s being
            controlled here too.
          </Text.Small>
        </motion.div>

        <motion.div
          className={style.Step}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div custom={4} variants={TextAnimations.topToBottom}>
            <small>04</small>
            <Cross.Filled className={style.Icon} size={'80px'} />
            <div className={style.Line} />
          </motion.div>
          <Text.P
            custom={5}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            VALIDATION
          </Text.P>
          <Text.Small custom={6} variants={TextAnimations.topToBottom}>
            Here is the fun part. User scenarios are being applied to the
            release candidate in many different ways. First by our engineers,
            then by the head of the team. And when finally all is passed and
            validated, it’s your time to get enjoyment of discovering updates.
            There is a multi-level protection applied to your happiness and
            time, so your clients can feel the same from your side.
          </Text.Small>
        </motion.div>

        <motion.div
          className={style.Step}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div custom={5} variants={TextAnimations.topToBottom}>
            <small>05</small>
            <Cross.Filled className={style.Icon} size={'80px'} />
          </motion.div>
          <Text.P
            custom={6}
            variants={TextAnimations.topToBottom}
            className={style.Title}
          >
            SUPPORT
          </Text.P>
          <Text.Small custom={7} variants={TextAnimations.topToBottom}>
            Time is never still. People are never the same. World spins and
            things happen. We are here to keep our creations running in tact
            with what’s surrounding them. And it’s not only about keeping them
            working. Here is where we can continuously improve the value brought
            by the project. As nothing gives a better view of the idea than time
            of the idea being alive!
          </Text.Small>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Stepper
