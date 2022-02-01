import { useEffect } from 'react'
import { initialize } from '../services/firebase'

import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty('--svh', `${window.innerHeight * 0.01}px`)
      document.documentElement.style.setProperty('--svw', `${window.innerWidth * 0.01}px`)

      window.addEventListener('resize', () => {
        document.documentElement.style.setProperty('--svh', `${window.innerHeight * 0.01}px`)
        document.documentElement.style.setProperty('--svw', `${window.innerWidth * 0.01}px`)
      })
    }

    initialize()
  }, [])

  return (
    <div className='h-screen overflow-auto'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
