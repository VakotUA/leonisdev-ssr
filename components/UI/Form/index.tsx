import React, { useState } from 'react'
import style from './style.module.scss'
import { Button } from '../Button'
import { Text } from '../Text'
import Arrow from '../../../assets/svgs/arrow.svg'
import Image from 'next/image'
import axios from 'axios'

interface IForm {
  name: string
  phone: string
  email: string
  message: string
}

export const ContactForm: React.FC = () => {
  const [details, setDetails] = useState<IForm>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isFinished, setIsFinished] = useState<boolean>(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const TOCKEN = '5573653105:AAE51cp92EQj4L8GAKsFrCcwC0Rg5nwXu74'
    const CHAT_ID = '-1001747841534'

    let message =
      `Name: ${details.name}\n` +
      `Phone: ${details.phone}\n` +
      `Email: ${details.email}\n` +
      `Message: ${details.message}\n`

    axios
      .post(`https://api.telegram.org/bot${TOCKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
      })
      .then(() => {
        setDetails({
          name: '',
          phone: '',
          email: '',
          message: '',
        })
        setIsFinished(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <div>
        <Text.H3 className={style.Title}>
          WRITE A MESSAGE{' '}
          {isFinished && (
            <Text.Small className={style.Success}>MESSAGE SENT</Text.Small>
          )}
        </Text.H3>

        <div className={style.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value })
            }}
            value={details.name}
          />
          <label htmlFor="name">
            <Text.P>NAME</Text.P>
          </label>
        </div>

        <div className={style.formGroup}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={(e) => {
              setDetails({ ...details, phone: e.target.value })
            }}
            value={details.phone}
            required
          />
          <label htmlFor="phone">
            <Text.P>PHONE NUMBER</Text.P>
          </label>
        </div>

        <div className={style.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value })
            }}
            value={details.email}
            required
          />

          <label htmlFor="email">
            <Text.P>EMAIL</Text.P>
          </label>
        </div>

        <div className={style.formGroup}>
          <input
            type="text"
            name="message"
            placeholder="Message"
            onChange={(e) => {
              setDetails({ ...details, message: e.target.value })
            }}
            value={details.message}
            required
          />

          <label htmlFor="message">
            <Text.P>MESSAGE</Text.P>
          </label>
        </div>

        <Button className={style.Button} type="submit">
          SEND MESSAGE
          <span className={style.Arrow}>
            <Image src={Arrow} alt="arrow" height={25} width={50} />
          </span>
        </Button>
      </div>
    </form>
  )
}
