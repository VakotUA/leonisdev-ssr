import React from 'react'
import style from './style.module.scss'
import { Text } from '../UI/Text'
import { Separator } from '../UI/Separator'
import { MotionButton } from '../UI/Button'
import { Cross } from '../UI/Particles'
import Circle from '../../assets/images/ellipse.png'

import Container from '../Layout/Container'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Arrow from '../../assets/svgs/arrow.svg'

import Image from 'next/image'
import Link from 'next/link'

const Skills: React.FC = () => {
  return (
    <motion.section
      id="about"
      className={style.Skills}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container className={style.Content}>
        <Text.H2 custom={1} variants={TextAnimations.leftToRight}>
          WHAT WE DO
        </Text.H2>
        <Text.H3 custom={2} variants={TextAnimations.leftToRight}>
          OUR SKILLS ARE:
        </Text.H3>

        <div className={style.Collumns}>
          <motion.div
            className={style.Block}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <div className={style.Title}>
              <Text.H5
                className={style.CustomLetterSpacing}
                custom={2.5}
                variants={TextAnimations.leftToRight}
              >
                A LOT OF THINGS THAT WE ARE GOOD AT
              </Text.H5>
            </div>

            <div className={style.ListCollumns}>
              <div>
                <Text.P custom={1} variants={TextAnimations.topToBottom}>
                  LANDING
                </Text.P>
                <Text.P custom={1.5} variants={TextAnimations.topToBottom}>
                  BLOG
                </Text.P>
                <Text.P custom={2} variants={TextAnimations.topToBottom}>
                  E-COMMERCE
                </Text.P>
                <Text.P custom={2.5} variants={TextAnimations.topToBottom}>
                  WEB CRM
                </Text.P>
              </div>
              <div>
                <Text.P custom={3} variants={TextAnimations.topToBottom}>
                  UI/UX DESIGN
                </Text.P>
                <Text.P custom={3.5} variants={TextAnimations.topToBottom}>
                  HTML5, CSS3
                </Text.P>
                <Text.P custom={4} variants={TextAnimations.topToBottom}>
                  JAVASCRIPT, JQUERY, JQUERY UI, VUEJS
                </Text.P>
                <Text.P custom={4.5} variants={TextAnimations.topToBottom}>
                  DJANGO, AIOGRAM, SELENIUM
                </Text.P>
                <Text.P custom={5} variants={TextAnimations.topToBottom}>
                  MYSQL, POSTGRESQL
                </Text.P>
              </div>
            </div>

            <Link href="/magic">
              <MotionButton
                className={style.Button}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                custom={2}
                variants={TextAnimations.topToBottom}
              >
                HOW DOES THE MAGIC HAPPEN?
                <span className={style.Arrow}>
                  <Image src={Arrow} alt="arrow" height={25} width={50} />
                </span>
              </MotionButton>
            </Link>
          </motion.div>

          <div className={style.Separator}>
            <Cross.Filled size="28px" />
            <Separator />
            <Cross.Filled size="56px" />
          </div>

          <motion.div
            className={style.Block}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <div className={style.Title}>
              <Text.H5
                className={style.CustomLetterSpacing}
                custom={2.5}
                variants={TextAnimations.rightToLeft}
              >
                WE BUILD WEBSITES AND APPS, SO YOU DON&apos;T HAVE TO!
              </Text.H5>
            </div>
            <div className={style.Text}>
              <Text.Small custom={4} variants={TextAnimations.rightToLeft}>
                We are born to bring ideas to life, saving up your time and
                peace for things that really matter.
                <br />
                Is it a website, mobile app or just a holiday postcard.
              </Text.Small>

              <Text.Small custom={6} variants={TextAnimations.rightToLeft}>
                We make it, testit and keep it running even while you sleep.
                <br />
                We find it astonishing how our cooperation makes the world a
                better place
              </Text.Small>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className={style.Circle1}>
        <Image src={Circle} alt="circle" />
      </div>
      <div className={style.Circle2}>
        <Image src={Circle} alt="circle" />
      </div>
    </motion.section>
  )
}

export default Skills
