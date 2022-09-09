import React from 'react'
import style from './style.module.scss'

import Container from '../Layout/Container'
import { Text } from '../UI/Text'
import { motion } from 'framer-motion'
import { TextAnimations } from '../../assets/animations/text'

import Image from '../../assets/images/lion_3.png'
import { Cross } from '../UI/Particles'

const Services: React.FC = () => {
  return (
    <motion.section
      id="services"
      className={style.Services}
      style={{ backgroundImage: `url(${Image.src})` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.05, once: true }}
    >
      <div className={style.Background1} />
      <div className={style.Background2} />
      <Container className={style.Content}>
        <div className={style.Title}>
          <Text.H3 custom={1} variants={TextAnimations.topToBottom}>
            SERVICES
          </Text.H3>
          <div>
            <Cross.Filled className={style.Particles1} />
            <Cross.Filled className={style.Particles2} size="56px" />
          </div>
        </div>

        <motion.div
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
            DEVELOPMENT
          </Text.H4>
          <ul>
            <li>
              <Text.P
                className={style.SubTitle}
                custom={2}
                variants={TextAnimations.topToBottom}
              >
                Landing Page
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={2.5}
                variants={TextAnimations.topToBottom}
              >
                A web-page created for the purpose of carrying out a potential
                action by a potential client, which leads to the collection of
                contact information.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={3}
                variants={TextAnimations.topToBottom}
              >
                Shop
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={3.5}
                variants={TextAnimations.topToBottom}
              >
                A site that allows the consumer to place an order for goods
                derictly online and seller - to sell this product
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={4}
                variants={TextAnimations.topToBottom}
              >
                Product Catalog
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={4.5}
                variants={TextAnimations.topToBottom}
              >
                The list of goods with specified characteristics and the prices
                which is a good information base for your buyers and partners is
                formed.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={5}
                variants={TextAnimations.topToBottom}
              >
                Corporate
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={5.5}
                variants={TextAnimations.topToBottom}
              >
                High-quality and full-fledged presentation of the company on the
                internet. Can setve as an internal resource for business
                communication of employees.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={6}
                variants={TextAnimations.topToBottom}
              >
                Web Business card
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={6.5}
                variants={TextAnimations.topToBottom}
              >
                A small web-page or a set of them that contains a maximum of
                information about the company (or enterpreneur) and its
                activities.
              </Text.Small>
            </li>
          </ul>
        </motion.div>

        <motion.div
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
            DESIGN
          </Text.H4>
          <ul>
            <li>
              <Text.P
                className={style.SubTitle}
                custom={2}
                variants={TextAnimations.topToBottom}
              >
                Adaptive web design
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={2.5}
                variants={TextAnimations.topToBottom}
              >
                Design of web-resources that provides high-quality and full
                display of the site on any device, as well as maintains its
                correct interaction with the user.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={3}
                variants={TextAnimations.topToBottom}
              >
                Corporate identity
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={3.5}
                variants={TextAnimations.topToBottom}
              >
                A set of activities, includeing the development of logos,
                selection of colors and fonts, verbal and graphic elements that
                will ensure brand recognition.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={4}
                variants={TextAnimations.topToBottom}
              >
                Design of advertising products
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={4.5}
                variants={TextAnimations.topToBottom}
              >
                A number of products are designed in the appropriate corporate
                style, with the company&apos;s logo on it, for it&apos;s
                distribution and brand promotion.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={5}
                variants={TextAnimations.topToBottom}
              >
                Packaging design
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={5.5}
                variants={TextAnimations.topToBottom}
              >
                Creating a unique quality design for the company&apos;s product
                that will help attract more consumers and roles and raise sales.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={6}
                variants={TextAnimations.topToBottom}
              >
                Interface design
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={6.5}
                variants={TextAnimations.topToBottom}
              >
                Development of user interfacers in which ease of use and
                informativeness are no less important than the perfect
                appearance.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={7}
                variants={TextAnimations.topToBottom}
              >
                Illustrations and graphics
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={7.5}
                variants={TextAnimations.topToBottom}
              >
                Drawing unique Illustrations, icons, infographics and explainer
                animated videos.
              </Text.Small>
            </li>
          </ul>
        </motion.div>

        <motion.div
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
            MARKETING
          </Text.H4>
          <ul>
            <li>
              <Text.P
                className={style.SubTitle}
                custom={2}
                variants={TextAnimations.topToBottom}
              >
                Target audience analysis
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={2.5}
                variants={TextAnimations.topToBottom}
              >
                Forming a &quot;portrait&quot; of customers, gathering
                informatio about their priorities and habits through
                communication, the use of web analytics to determine the
                characteristics of traffic. Development of marketing strategy.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={3}
                variants={TextAnimations.topToBottom}
              >
                SMM promotin
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={3.5}
                variants={TextAnimations.topToBottom}
              >
                Development of a content plan, maintaining social networks and
                blogs of the company, live communication with potential
                customers, setting up targeted advertising.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={4}
                variants={TextAnimations.topToBottom}
              >
                Contextual advertising
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={4.5}
                variants={TextAnimations.topToBottom}
              >
                Launch banners and text ads on search engines and their partner
                sites.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={5}
                variants={TextAnimations.topToBottom}
              >
                Photo production
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={5.5}
                variants={TextAnimations.topToBottom}
              >
                Creation of high-quality photos with the help of prefessional
                equipment, development of images by designers that will
                correspond to the context of the company&apos;s activities and
                the chosen goal of propmotion.
              </Text.Small>
            </li>

            <li>
              <Text.P
                className={style.SubTitle}
                custom={6}
                variants={TextAnimations.topToBottom}
              >
                Advertising campaings
              </Text.P>
              <Text.Small
                className={style.ListContent}
                custom={6.5}
                variants={TextAnimations.topToBottom}
              >
                Planning promotional activities as part of a marketing strategy
                aimed at promoting the brand.
              </Text.Small>
            </li>
          </ul>
        </motion.div>
      </Container>
    </motion.section>
  )
}

export default Services
