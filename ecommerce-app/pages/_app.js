import '../styles/globals.css'
import { Store } from '../utils/Store'
import {Provider} from "react-redux"
import { SessionProvider, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return(
    <SessionProvider session={session}>
      <Provider store={Store}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps}/>
          </Auth>
        ): (
          <Component {...pageProps} />
        )}
      </Provider>
    </SessionProvider>
  ) 
}

function Auth({children}) {
  const router = useRouter()
  const {status} = useSession({
    required: true,
    onUnauthenticated(){
      router.push('/unauthorized?message=login required')
    }
  })
  if(status === 'loading') {
    return <div>Loading...</div>
  }
  return children
}

export default MyApp
