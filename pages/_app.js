import '../styles/globals.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Navigation = dynamic(()=>import("../components/Navigation"),{ssr:false})
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