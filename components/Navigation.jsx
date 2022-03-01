import Link from 'next/link';
import Head from 'next/head';
import Script from "next/script"

function Navigation() {
	
  return (
    <>
			<Script id="show-MNav" strategy="lazyOnload">{var mobilemenu = document.getElementById('mobile-menu')
	var xButton = document.getElementById('X')
	var menubutton = document.getElementById('menu-button')
	var hamburgerbutton = document.getElementById('hamburger-button')
	var open = false

	
	function check(){
	  open = !open;
	  if (open) {
	    				hamburgerbutton.classList.add('hidden')
	    xButton.classList.remove('hidden')
	    mobilemenu.classList.remove('hidden')
	  }
	  if (!open) {
	    hamburgerbutton.classList.remove('hidden')
	    xButton.classList.add('hidden')
	    mobilemenu.classList.add('hidden')
	  }
	}}</Script>
			<Head>
			<link rel="apple-touch-icon" sizes="180x180" href="https://jeremiahis.vercel.app/assets/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="https://jeremiahis.vercel.app/assets/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="194x194" href="https://jeremiahis.vercel.app/assets/favicon-194x194.png"/>
<link rel="icon" type="image/png" sizes="192x192" href="https://jeremiahis.vercel.app/assets/android-chrome-192x192.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="https://jeremiahis.vercel.app/assets/favicon-16x16.png"/>
<link rel="manifest" href="https://jeremiahis.vercel.app/assets/site.webmanifest"/>
<link rel="mask-icon" href="https://jeremiahis.vercel.app/assets/safari-pinned-tab.svg" color="#0088ff"/>
<meta name="apple-mobile-web-app-title" content="JIS Media Pro"/>
<meta name="application-name" content="JIS Media Pro"/>
<meta name="msapplication-TileColor" content="#2b5797"/>
<meta name="msapplication-TileImage" content="https://jeremiahis.vercel.app/assets/mstile-144x144.png"/>
<meta name="theme-color" content="#0088ff"/>
			</Head>
			<nav className="bg-gray-800 w-screen">
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div className="relative flex items-center justify-between h-16">
				<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<button type="button" id="menu-button" onClick={check()} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none " aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" id="hamburger-button">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="hidden h-6 w-6" id="X" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <a href="/">
        <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-10 w-auto" src="https://icon-library.com/images/custom-facebook-icon/custom-facebook-icon-0.jpg" alt="Fake-book F"/>
          <img className="hidden lg:block h-10 w-auto"
          src="https://icon-library.com/images/custom-facebook-icon/custom-facebook-icon-0.jpg" alt="Fake-Book F"/>
        </div>
        </a>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

            <a href="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

            <a href="/Dates" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Important Dates</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </nav>
<nav className="bg-gray-800 w-screen">
  <div className="sm:hidden hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

      <a href="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>

      <a href="/Dates" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Important Dates</a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navigation;