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
    __html: `function initFreshChat() {     window.fcWidget.init({       token: "91a3199a-6765-42fb-b823-f7cc88711c67",       host: "https://wchat.freshchat.com"     });   }   function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);`,
  }}
/>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}