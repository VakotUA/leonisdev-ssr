import React from 'react'
import style from './style.module.scss'

import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'
import { Cross } from '../UI/Particles'

import CSS from '../../assets/images/css.png'
import Ai from '../../assets/images/ai.png'
import Ps from '../../assets/images/ps.png'
import Django from '../../assets/images/django.png'
import HTML from '../../assets/images/html5.png'
import JQUI from '../../assets/images/jq_ui.png'
import Jquery from '../../assets/images/jquery.png'
import JS from '../../assets/images/js.png'
import MySQL from '../../assets/images/mySql.png'
import Python from '../../assets/images/pyton.png'
import ReactIMG from '../../assets/images/react.png'
import Selenium from '../../assets/images/Selenium.png'
import VueJS from '../../assets/images/VueJS.png'

import Lion from '../../assets/images/lion_2(bgfree).png'
import Circle from '../../assets/images/ellipse.png'

import Image from 'next/image'

const Technologies: React.FC = () => {
  return (
    <motion.section
      id="technologies"
      className={style.Technologies}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={style.Image}>
        <Image src={Lion} alt="lion" />
      </div>
      <div className={style.Circle}>
        <Image src={Circle} alt="circle" />
      </div>

      <Container className={style.Content}>
        <motion.div className={style.Title}>
          <div>
            <Text.H3 custom={1} variants={TextAnimations.leftToRight}>
              TECHNOLOGIES
            </Text.H3>
            <Text.P
              className={style.CustomLetterSpacing}
              custom={2.5}
              variants={TextAnimations.leftToRight}
            >
              A LOT OF THINGS THAT WE ARE GOOD AT
            </Text.P>
          </div>
          <div>
            <Cross.Filled size="56px" />
          </div>
        </motion.div>
        <motion.div
          className={style.List}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <ul>
            <motion.li custom={1} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={HTML} alt="html" />
              </div>
            </motion.li>
            <motion.li custom={2} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={CSS} alt="css" />
              </div>
            </motion.li>
            <motion.li custom={3} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={JS} alt="js" />
              </div>
            </motion.li>
            <motion.li custom={4} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={Jquery} alt="jquery" />
              </div>
            </motion.li>
            <motion.li custom={5} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={JQUI} alt="jqui" />
              </div>
            </motion.li>
            <motion.li custom={6} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={Ps} alt="pa" />
              </div>
            </motion.li>
            <motion.li custom={7} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={Ai} alt="ai" />
              </div>
            </motion.li>
            <motion.li custom={8} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={Django} alt="django" />
              </div>
            </motion.li>
            <motion.li custom={9} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={Selenium} alt="selenium" />
              </div>
            </motion.li>
            <motion.li custom={10} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={ReactIMG} alt="react" />
              </div>
            </motion.li>
            <motion.li custom={11} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={Python} alt="python" />
              </div>
            </motion.li>
            <motion.li custom={12} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={VueJS} alt="vuejs" />
              </div>
            </motion.li>
            <motion.li custom={13} variants={TextAnimations.topToBottom}>
              <div className={style.TechnologyImage}>
                <Image src={MySQL} alt="mysql" />
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </Container>
    </motion.section>
  )
}

export default Technologies
