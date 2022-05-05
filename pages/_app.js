import '../styles/globals.css'
import Head from 'next/head'
import Script from "next/script"
import Navigation from '../components/Navigation'
export default function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Head>
        
       <title>JIS Media Pro</title>
      </Head>
		<Script
  id="chat-widget"
  dangerouslySetInnerHTML={{
    __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="b63678f6-e71f-4f61-a902-3d322733893e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
  }}
/>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
