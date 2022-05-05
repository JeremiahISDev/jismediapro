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
    __html: `var _glc =_glc || []; _glc.push('all_ag9zfmNsaWNrZGVza2NoYXRyEgsSBXVzZXJzGICAyKHZ49oKDA');
if(document.location.hostname != 'localhost'){
	var glcpath = (('https:' == document.location.protocol) ? 'https://my.clickdesk.com/clickdesk-ui/browser/' : 
	'http://my.clickdesk.com/clickdesk-ui/browser/');
	var glcp = (('https:' == document.location.protocol) ? 'https://' : 'http://');
}else{
	var glcpath = 'http://localhost:8888/clickdesk-ui/browser/';
	var glcp = 'http://';
}
var glcspt = document.createElement('script'); glcspt.type = 'text/javascript'; 
glcspt.async = true; glcspt.src = glcpath + 'livechat-cloud-new.js';
var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(glcspt, s);`,
  }}
/>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
