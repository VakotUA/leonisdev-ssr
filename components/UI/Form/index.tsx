import React, { useState } from 'react'
import style from './style.module.scss'
import { Button } from '../Button'
import { Text } from '../Text'
import Arrow from '../../../assets/svgs/arrow.svg'
import Image from 'next/image'

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

  const handleSubmit = (e: any) => {
    e.preventDefault()

    console.log(details)
  }

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <div>
        <Text.H3 className={style.Title}>WRITE A MESSAGE</Text.H3>

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
