import React, { useEffect } from 'react'
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

import useTranslation from 'next-translate/useTranslation'

const Skills: React.FC = () => {
  const { t } = useTranslation('home')

  const HARD_SKILLS = t<string[]>(
    'skills.collumn-1.list-1',
    {},
    { returnObjects: true }
  )
  const SOFT_SKILLS = t<string[]>(
    'skills.collumn-1.list-2',
    {},
    { returnObjects: true }
  )

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
          {t('skills.title')}
        </Text.H2>
        <Text.H3 custom={2} variants={TextAnimations.leftToRight}>
          {t('skills.sub-title')}
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
                {t('skills.collumn-1.title')}
              </Text.H5>
            </div>

            <div className={style.ListCollumns}>
              <div>
                {HARD_SKILLS.map((item: string, index: number) => (
                  <Text.P
                    key={index}
                    custom={1 + index / 2}
                    variants={TextAnimations.topToBottom}
                  >
                    {item}
                  </Text.P>
                ))}
              </div>
              <div>
                {SOFT_SKILLS.map((item: string, index: number) => (
                  <Text.P
                    key={index}
                    custom={1 + index / 2}
                    variants={TextAnimations.topToBottom}
                  >
                    {item}
                  </Text.P>
                ))}
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
                {t('skills.button')}
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
                {t('skills.collumn-2.title')}
              </Text.H5>
            </div>
            <div className={style.Text}>
              <Text.Small custom={4} variants={TextAnimations.rightToLeft}>
                {t('skills.collumn-2.text-1')}
                <br />
                {t('skills.collumn-2.text-2')}
              </Text.Small>

              <Text.Small custom={6} variants={TextAnimations.rightToLeft}>
                {t('skills.collumn-2.text-3')}
                <br />
                {t('skills.collumn-2.text-4')}
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
