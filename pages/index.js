import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { logEvent } from 'firebase/analytics'
import { ref, onValue } from 'firebase/database'
import { analytics, database } from '../services/firebase'

import { FaArrowDown, FaDiscord, FaEnvelope, FaFacebook, FaFacebookMessenger, FaGithub, FaInstagram, FaLocationArrow, FaPhone, FaSoundcloud, FaSpotify, FaStar, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

import logo from '../public/logo.png'

export default function Home () {
  const [warning, setWarning] = useState({})

  function clickLink (name) {
    logEvent(analytics, 'click-link', {
      name
    })
  }

  useEffect(() => {
    onValue(ref(database, 'aviso'), (snapshot) => {
      const data = snapshot.val()

      if (data.name) {
        logEvent(analytics, 'show-warning', {
          name: data.name
        })
      }

      setWarning(data)
    })
  }, [])

  return (
    <div className='h-full snap-mandatory snap-y'>
      <Head>
        {/* Primary Meta Tags */}
        <title>Escola Estadual Ermano Marchetti</title>
        <meta name='title' content='Escola Estadual Ermano Marchetti' />
        <meta name='description' content='Site da Escola Estadual Ermano Marchetti em Chácara Inglesa, São Paulo, SP' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon-16.png' sizes='16x16' />
        <link rel='icon' type='image/png' href='/favicon-24.png' sizes='24x24' />
        <link rel='icon' type='image/png' href='/favicon-32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='/favicon-72.png' sizes='72x72' />
        <link rel='icon' type='image/png' href='/favicon-96.png' sizes='96x96' />
        <link rel='icon' type='image/png' href='/favicon-114.png' sizes='114x114' />
        <link rel='icon' type='image/png' href='/favicon-128.png' sizes='128x128' />
        <link rel='icon' type='image/png' href='/favicon-144.png' sizes='144x144' />
        <link rel='icon' type='image/png' href='/favicon-152.png' sizes='152x152' />
        <link rel='icon' type='image/png' href='/favicon-167.png' sizes='167x167' />
        <link rel='icon' type='image/png' href='/favicon-180.png' sizes='180x180' />
        <link rel='icon' type='image/png' href='/favicon-192.png' sizes='192x192' />
        <link rel='icon' type='image/png' href='/favicon-196.png' sizes='196x196' />
        <link rel='icon' type='image/png' href='/favicon-256.png' sizes='256x256' />
        <link rel='icon' type='image/png' href='/favicon-2048.png' sizes='2048x2048' />
        <link rel='mask-icon' href='/mask-icon.svg' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ermanomarchetti.com/' />
        <meta property='og:title' content='Escola Estadual Ermano Marchetti' />
        <meta property='og:description' content='Site da Escola Estadual Ermano Marchetti em Chácara Inglesa, São Paulo, SP' />
        <meta property='og:image' content='https://ermanomarchetti.com/thumbnail.png' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ermanomarchetti.com/' />
        <meta property='twitter:title' content='Escola Estadual Ermano Marchetti' />
        <meta property='twitter:description' content='Site da Escola Estadual Ermano Marchetti em Chácara Inglesa, São Paulo, SP' />
        <meta property='twitter:image' content='https://ermanomarchetti.com/thumbnail.png' />
      </Head>

      <main className='h-screen flex flex-col justify-center items-center p-5 overflow-hidden snap-start'>
        <h1 className='sr-only'>Escola Estadual Ermano Marchetti</h1>
        <AnimatePresence>
          {
            warning.name &&
              <motion.a initial={{ y: -100, scale: 0 }} animate={{ y: 0, scale: 1 }} exit={{ y: -100, scale: 0 }} href={warning.url ? warning.url : undefined} target='_blank' rel='noreferrer' onClick={() => logEvent(analytics, 'click-warning', { name: warning.name })} className={`bg-[#457ccf] p-1 rounded-md z-50 drop-shadow-[0_0_0.5rem_var(--background-color)] selection:bg-white selection:text-[#457ccf] ${warning.url && 'hover:brightness-75'}`}>
                <p>{warning.name}</p>
              </motion.a>
          }
        </AnimatePresence>
        <div className='flex flex-col justify-center items-center flex-1 w-full select-none'>
          <motion.div
            drag
            dragConstraints={{ top: -25, right: 25, bottom: 25, left: -25 }}
            dragSnapToOrigin
            whileDrag={{ filter: 'hue-rotate(100deg)' }}
            className='cursor-grab transition-[filter] duration-[2000ms] ease-in select-none'
          >
            <div className='max-w-[clamp(10vw,40vh,50vw)] w-full'>
              <Image src={logo} placeholder='blur' alt='Logo da escola' draggable='false' />
            </div>
          </motion.div>
        </div>
        <a href='#cards' className='bg-white text-black p-2 text-sm cursor-pointer rounded-full transition-all hover:brightness-75 z-50 drop-shadow-[0_0_0.5rem_var(--background-color)]'>
          <FaArrowDown aria-hidden />
          <span className='sr-only'>Informações e redes sociais</span>
        </a>
      </main>

      <footer className='h-screen flex flex-col justify-center items-center p-3 bg-[#457ccf] text-black snap-start' id='cards'>
        <div className='flex flex-col md:flex-row items-stretch justify-center gap-3'>
          <div className='bg-white/20 backdrop-blur-sm rounded-md max-w-md w-full p-3 flex flex-col justify-between'>
            <h2 className='text-2xl font- mb-3'>Contato</h2>
            <ul className='flex flex-col gap-1'>
              <a href='mailto:e000267a@educacao.sp.gov.br' target='_blank' rel='noreferrer' onClick={() => clickLink('E-mail: e000267a@educacao.sp.gov.br')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaEnvelope /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaEnvelope /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>E-mail: e000267a@educacao.sp.gov.br</span>
                </li>
              </a>
              <a href='tel:+551139046132' target='_blank' rel='noreferrer' onClick={() => clickLink('Telefone: (11) 3904-6132')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaPhone /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaPhone /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Telefone: (11) 3904-6132</span>
                </li>
              </a>
              <a href='https://g.page/ErmanoMarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Endereço: R. Pedro Marigliani, 192 - Chácara Inglesa, São Paulo - SP, 05141-010')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaLocationArrow /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaLocationArrow /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Endereço: R. Pedro Marigliani, 192 - Chácara Inglesa, São Paulo - SP, 05141-010</span>
                </li>
              </a>
              <a href='https://g.page/ErmanoMarchetti/review?gm' target='_blank' rel='noreferrer' onClick={() => clickLink('Nos avalie')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaStar /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaStar /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Nos avalie</span>
                </li>
              </a>
            </ul>
          </div>
          <div className='bg-white/20 backdrop-blur-sm rounded-md max-w-md w-full p-3 flex flex-col justify-between'>
            <h2 className='text-2xl font- mb-3'>Redes sociais</h2>
            <ul className='grid grid-cols-2 gap-1'>
              <a href='https://www.youtube.com/user/RadioMarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Youtube')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaYoutube /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaYoutube /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Youtube</span>
                </li>
              </a>
              <a href='https://www.instagram.com/radiomarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Instagram')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaInstagram /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaInstagram /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Instagram</span>
                </li>
              </a>
              <a href='https://m.me/RadioMarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Messenger')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaFacebookMessenger /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaFacebookMessenger /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Messenger</span>
                </li>
              </a>
              <a href='https://open.spotify.com/user/a7x8pfre1iifeb053ntzfc7d8' target='_blank' rel='noreferrer' onClick={() => clickLink('Spotify')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaSpotify /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaSpotify /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Spotify</span>
                </li>
              </a>
              <a href='https://twitter.com/marchettiradio' target='_blank' rel='noreferrer' onClick={() => clickLink('Twitter')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaTwitter /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaTwitter /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Twitter</span>
                </li>
              </a>
              <a href='https://twitch.tv/radiomarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Twitch')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaTwitch /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaTwitch /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Twitch</span>
                </li>
              </a>
              <a href='https://www.facebook.com/radiomarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Facebook')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaFacebook /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaFacebook /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Facebook</span>
                </li>
              </a>
              <a href='https://discord.gg/exq9kUp' target='_blank' rel='noreferrer' onClick={() => clickLink('Discord')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaDiscord /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaDiscord /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Discord</span>
                </li>
              </a>
              <a href='https://soundcloud.com/radiomarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Soundcloud')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaSoundcloud /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaSoundcloud /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Soundcloud</span>
                </li>
              </a>
              <a href='https://github.com/radiomarchetti' target='_blank' rel='noreferrer' onClick={() => clickLink('Github')}>
                <li className='flex items-center gap-2 cursor-pointer group'>
                  <span aria-hidden className='shrink-0'><FaGithub /></span>
                  {/* <span aria-hidden className='shrink-0 before:transition-all before:ease-in before:bg-white/20 before:opacity-0 before:block before:absolute before:-inset-2 before:rounded-full group-hover:before:opacity-100 before:p-4 relative inline-block before:-z-10'><FaGithub /></span> */}
                  <span className='break-words overflow-hidden transition-all group-hover:translate-x-1'>Github</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
