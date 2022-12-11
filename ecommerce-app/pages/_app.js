import '../styles/globals.css'
import { Store } from '../utils/Store'
import {Provider} from "react-redux"
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return(
    <SessionProvider session={session}>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  ) 
}

export default MyApp
