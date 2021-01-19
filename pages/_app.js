import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    console.log("%cDeveloped by", "font-size: 1rem")
    console.log("%cPeter Fritz", "font-size: 2rem")
    console.log("%chttps://peterfritz.dev/", "font-size: 1rem")
    console.log("")
    console.log("%cIn association with", "font-size: 1rem")
    console.log("%cRádio Marchetti", "font-size: 2rem")
  }

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168481391-2"></script>
        <script dangerouslySetInnerHTML = {{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-168481391-2');
          `
        }} ></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
