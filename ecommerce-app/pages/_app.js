import '../styles/globals.css'
import { Store } from '../utils/Store'
import {Provider} from "react-redux"

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
