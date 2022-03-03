import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="https://jeremiahis.vercel.app/assets/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="https://jeremiahis.vercel.app/assets/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="https://jeremiahis.vercel.app/assets/favicon-16x16.png"/>
<link rel="manifest" href="https://jeremiahis.vercel.app/assets/site.webmanifest"/>
<link rel="mask-icon" href="https://jeremiahis.vercel.app/assets/safari-pinned-tab.svg" color="#8800ff"/>
<meta name="msapplication-TileColor" content="#603cba"/>
<meta name="theme-color" content="#0088ff"/>
    </Head>
    <header className="flex items-center p-2 md:px-6 flex-wrap text-white bg-gray-800 h-fit">
      <div
        id="logo"
        className="lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold"
      >
        <Link href="/">
        <span>
        <img className="h-10 w-10" src="https://jeremiahis.vercel.app/assets/LOGO.png" alt="JIS Media Pro" />
        </span>
        </Link>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>

      <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
        <div
          className={
            "lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " +
            (showNav ? "" : "hidden")
          }
        >
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-white hover:bg-blue-600 focus:outline-none">
              Home
            </a>
          </Link>

          <Link href="/About">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-white hover:bg-blue-600 focus:outline-none">
              About
            </a>
          </Link>
          <Link href="/Order">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:text-white hover:bg-blue-600 focus:outline-none">
              Order
            </a>
          </Link>
        </div>
      </div>
      
    </header>
    </>
  );
};

export default Navigation;
