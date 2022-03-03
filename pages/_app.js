import '../styles/globals.css'
import Head from 'next/head'
import Navigation from '../components/Navigation'
export default function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Head>
        
       <title>JIS Media Pro</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}