import React from 'react'
import style from './style.module.scss'

import LogoSVG from '../../assets/svgs/lion_logo_text_white.svg'

import Telegram from '../../assets/images/telegram.png'
import Instagram from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/facebook.png'

import Container from '../Layout/Container'

import { MenuButton } from '../UI/MenuButton'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { menuSlice } from '../../store/reducers/menu'

import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import useTranslation from 'next-translate/useTranslation'
import { MotionSelect } from '../UI/LanguageSelect'

const Header: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleLocaleChange = (language: string) => {
    router.push(router.route, router.asPath, {
      locale: language,
    })
  }

  const menu = useAppSelector((state) => state.menu)
  const dispatch = useAppDispatch()
  const { toggleMenu } = menuSlice.actions

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className={style.Header}
    >
      <Container className={style.Content}>
        <motion.div custom={2} variants={TextAnimations.leftToRight}>
          <Link href="/">
            <Image
              height={80}
              width={280}
              src={LogoSVG}
              alt="logo"
              className={style.Logo}
            />
          </Link>
        </motion.div>

        <motion.div
          className={`${style.Navigation} ${menu?.isActive && style.Active}`}
        >
          <motion.ul>
            <motion.li
              custom={0.5}
              variants={TextAnimations.topToBottom}
              onClick={() => dispatch(toggleMenu(false))}
            >
              <Link href="/">{t('header.home')}</Link>
            </motion.li>
            <motion.li
              custom={1}
              variants={TextAnimations.topToBottom}
              onClick={() => dispatch(toggleMenu(false))}
            >
              <Link href="/#about">{t('header.about-us')}</Link>
            </motion.li>
            <motion.li
              custom={1.5}
              variants={TextAnimations.topToBottom}
              onClick={() => dispatch(toggleMenu(false))}
            >
              <Link href="/magic/#services">{t('header.services')}</Link>
            </motion.li>
            {/* <motion.li
              custom={2}
              variants={TextAnimations.topToBottom}
              onClick={() => dispatch(toggleMenu(false))}
            >
              <Link href="/#portfolio">PORTFOLIO</Link>
            </motion.li> */}
            <motion.li
              custom={2.5}
              variants={TextAnimations.topToBottom}
              onClick={() => dispatch(toggleMenu(false))}
            >
              <Link href="/#contacts">{t('header.contacts')}</Link>
            </motion.li>
          </motion.ul>
        </motion.div>

        <div className={style.Links}>
          <motion.a custom={0.5} variants={TextAnimations.rightToLeft} href="/">
            <Image width={40} height={32} src={Telegram} alt="telegram" />
          </motion.a>
          <motion.a custom={1} variants={TextAnimations.rightToLeft} href="/">
            <Image width={32} height={32} src={Instagram} alt="instagram" />
          </motion.a>
          <motion.a custom={1.5} variants={TextAnimations.rightToLeft} href="/">
            <Image width={32} height={32} src={Facebook} alt="facebook" />
          </motion.a>

          <MotionSelect
            custom={2}
            variants={TextAnimations.rightToLeft}
            className={style.Select}
            onSelect={(value) => handleLocaleChange(value)}
            value={router.locale}
            options={router.locales}
          />

          <div className={style.Burger}>
            <MenuButton />
          </div>
        </div>
      </Container>
    </motion.header>
  )
}

export default Header
