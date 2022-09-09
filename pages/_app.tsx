import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'

import Header from '../components/Header'
import Media from '../components/MediaLinks'
import Contacts from '../components/Contacts'

import '../styles/globals.scss'
import '../styles/reset.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Media />
      <Contacts />
    </Provider>
  )
}
