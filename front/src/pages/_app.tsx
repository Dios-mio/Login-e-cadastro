
import {AppProps} from 'next/app'
import CreateGlobalStyle from '../styles/global'
const MyApp:React.FC<AppProps>=({ Component, pageProps })=> {
 return( <>
   <Component {...pageProps} />
   <CreateGlobalStyle/>
  </>
  )
}

export default MyApp
