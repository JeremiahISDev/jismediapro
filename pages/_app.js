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

<Script
  id="smartlook"
  dangerouslySetInnerHTML={{
    __html: `  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', 'a47f66c73623b0ad1225a7b9714c1d8fcd87c963', { region: 'eu' });`,
  }}
/>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
