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
  id="crisp-widget"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="9f460efd-73d6-4fd2-af0f-11d2591c0e7c";
      (function(){
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();`,
  }}
/>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}