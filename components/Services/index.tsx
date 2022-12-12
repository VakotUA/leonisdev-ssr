import React from 'react'
import style from './style.module.scss'

import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Image from '../../assets/images/lion_3_new_2.png'
import { Cross } from '../UI/Particles'

import useTranslation from 'next-translate/useTranslation'

type Service = {
  title: string
  list: { title: string; text: string }[]
}

const Services: React.FC = () => {
  const { t } = useTranslation('magic')

  const SERVICES_LIST = t<Service[]>(
    'services.services-list',
    {},
    { returnObjects: true }
  )

  return (
    <motion.section
      id="services"
      className={style.Services}
      style={{ backgroundImage: `url(${Image.src})` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.05, once: true }}
    >
      <div className={style.Shadow} />

      <Container className={style.Content}>
        <div className={style.Title}>
          <Text.H3 custom={1} variants={TextAnimations.topToBottom}>
            {t('services.title')}
          </Text.H3>
          <div>
            <Cross.Filled className={style.Particles1} />
            <Cross.Filled className={style.Particles2} size="56px" />
          </div>
        </div>

        {SERVICES_LIST.map((service: Service, index: number) => (
          <motion.div
            key={index}
            className={style.Block}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <Text.H4
              className={style.Title}
              custom={1}
              variants={TextAnimations.topToBottom}
            >
              {service.title}
            </Text.H4>

            <ul>
              {service.list.map(
                (item: { title: string; text: string }, _index: number) => (
                  <li key={_index}>
                    <Text.P
                      className={style.SubTitle}
                      custom={2}
                      variants={TextAnimations.topToBottom}
                    >
                      {item.title}
                    </Text.P>

                    <Text.Small
                      className={style.ListContent}
                      custom={2.5}
                      variants={TextAnimations.topToBottom}
                    >
                      {item.text}
                    </Text.Small>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        ))}
      </Container>
    </motion.section>
  )
}

export default Services
