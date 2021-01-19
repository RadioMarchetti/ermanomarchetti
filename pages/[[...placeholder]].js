import { useEffect, useState } from 'react'
import { FaArrowUp, FaDiscord, FaFacebook, FaFacebookMessenger, FaInstagram, FaSpotify, FaTwitch, FaTwitter, FaYoutube, FaSoundcloud, FaGithub, FaEnvelope, FaPhone, FaLocationArrow, FaStar } from 'react-icons/fa'
import Head from 'next/head'
import Ztext from 'react-ztext'
import getArticles from '../services/articles'

import styles from '../styles/Placeholder.module.css'

export default function Placeholder({ avisos }) {
  const [countdown, setCountdown] = useState(`${Math.floor((1612173600000 - Date.now()) / (1000 * 60 * 60 * 24))}d ${Math.floor(((1612173600000 - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )}h ${Math.floor(((1612173600000 - Date.now()) % (1000 * 60 * 60)) / (1000 * 60) )}m ${Math.floor(((1612173600000 - Date.now()) % (1000 * 60)) / 1000 )}s`)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(`${Math.floor((1612173600000 - Date.now()) / (1000 * 60 * 60 * 24))}d ${Math.floor(((1612173600000 - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )}h ${Math.floor(((1612173600000 - Date.now()) % (1000 * 60 * 60)) / (1000 * 60) )}m ${Math.floor(((1612173600000 - Date.now()) % (1000 * 60)) / 1000 )}s`)
    }, 1000);
    return () => clearInterval(timer)
  }, [countdown])

  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`)
    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
      document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`)
    })
  }

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="emfull.svg" />
        <link rel="icon" type="image/png" href="images/emfull16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="images/emfull24.png" sizes="24x24" />
        <link rel="icon" type="image/png" href="images/emfull32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="images/emfull72.png" sizes="72x72" />
        <link rel="icon" type="image/png" href="images/emfull96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="images/emfull114.png" sizes="114x114" />
        <link rel="icon" type="image/png" href="images/emfull128.png" sizes="128x128" />
        <link rel="icon" type="image/png" href="images/emfull144.png" sizes="144x144" />
        <link rel="icon" type="image/png" href="images/emfull192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="images/emfull256.png" sizes="256x256" />
        <link rel="icon" type="image/png" href="images/emfull2048.png" sizes="2048x2048" />
        <link rel="mask-icon" href="images/emfull.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#447cce" />
        <meta name="description" content="Site oficial da Escola Estadual Ermano Marchetti em Chácara Inglesa, São Paulo, SP" />
        <meta http-equiv="Content-Language" content="pt-br" />

        <meta property="og:title" content="E. E. Ermano Marchetti" />
        <meta property="og:url" content="http://ermanomarchetti.web.app/" />
        <meta property="og:description" content="Site oficial da Escola Estadual Ermano Marchetti" />
        <meta property="og:image" content="https://marchetti.now.sh/api/random/thumbnail" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Ermano Marchetti" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@marchettiradio" />
        <meta name="twitter:creator" content="@p3t3rfr1tz" />
        <meta name="twitter:url" content="http://ermanomarchetti.web.app/" />
        <meta name="twitter:title" content="E. E. Ermano Marchetti" />
        <meta name="twitter:description" content="Site oficial da Escola Estadual Ermano Marchetti" />
        <meta name="twitter:image" content="https://marchetti.now.sh/api/random/thumbnail" />

        <title>Escola Estadual Ermano Marchetti</title>
      </Head>
      <div className={styles.placeholderwrapper}>
        <div className={styles.placeholdercontainer}>
          <section className={styles.placeholderlogo}>
            <div className="placeholderemlogo">
              <Ztext
                depth='1rem'
                direction='both'
                event='none'
                // eventRotation='30deg'
                // eventDirection='default'
                fade={false}
                layers={10}
                perspective='500px'
              >
                <img src="/images/emfull.svg" />
              </Ztext>
              { typeof window !== "undefined" && 1612173600000 >= Date.now() ? <p className={styles.countdown}>Se tudo der certo, voltamos em {countdown}</p> : "" }
            </div>
            <a href="#cards" className={styles.arrow}><FaArrowUp className={styles.icon} /></a>
          </section>
          <section id="cards" className={styles.placeholderinfo}>
            <div className={styles.card}>
              <h3>Contato</h3>
              <a title="Nos mande um e-mail" className={styles.hover} rel="noopener noreferrer" href="mailto:e000267a@educacao.sp.gov.br" target="_blank">
                <p><FaEnvelope className={styles.inlineicons} /> E-mail: e000267a@educacao.sp.gov.br</p>
              </a>
              <a title="Nos ligue" className={styles.hover} rel="noopener noreferrer" href="tel:+551139046132" target="_blank">
                <p><FaPhone className={styles.inlineicons} /> Telefone: (11) 3904-6132</p>
              </a>
              <a title="Nos visite" className={styles.hover} rel="noopener noreferrer" href="https://g.page/ErmanoMarchetti" target="_blank">
                <p><FaLocationArrow className={styles.inlineicons} /> Endereço: R. Pedro Marigliani, 192 - Chácara Inglesa, São Paulo - SP, 05141-010</p>
              </a>
              <a title="Nos avalie" className={styles.hover} rel="noopener noreferrer" href="https://g.page/ErmanoMarchetti/review?gm" target="_blank">
              <p><FaStar className={styles.inlineicons} /> Nos avalie</p>
              </a>
            </div>
            <div className={styles.card}>
              <h3>Redes sociais</h3>
              <div className={styles.grid}>
                <a title="Youtube" className={styles.hover} rel="noopener noreferrer" href="https://www.youtube.com/user/RadioMarchetti" target="_blank">
                  <p><FaYoutube className={styles.inlineicons} /> Youtube</p>
                </a>
                <a title="Twitch" className={styles.hover} rel="noopener noreferrer" href="https://twitch.tv/radiomarchetti" target="_blank">
                  <p><FaTwitch className={styles.inlineicons} /> Twitch</p>
                </a>
                <a title="Instagram" className={styles.hover} rel="noopener noreferrer" href="https://www.instagram.com/radiomarchetti" target="_blank">
                  <p><FaInstagram className={styles.inlineicons} /> Instagram</p>
                </a>
                <a title="Facebook" className={styles.hover} rel="noopener noreferrer" href="https://www.facebook.com/radiomarchetti" target="_blank">
                  <p><FaFacebook className={styles.inlineicons} /> Facebook</p>
                </a>
                <a title="Messenger" className={styles.hover} rel="noopener noreferrer" href="https://m.me/RadioMarchetti" target="_blank">
                  <p><FaFacebookMessenger className={styles.inlineicons} /> Messenger</p>
                </a>
                <a title="Discord" className={styles.hover} rel="noopener noreferrer" href="https://discord.gg/exq9kUp" target="_blank">
                  <p><FaDiscord className={styles.inlineicons} /> Discord</p>
                </a>
                <a title="Spotify" className={styles.hover} rel="noopener noreferrer" href="https://open.spotify.com/user/a7x8pfre1iifeb053ntzfc7d8" target="_blank">
                  <p><FaSpotify className={styles.inlineicons} /> Spotify</p>
                </a>
                <a title="Soundcloud" className={styles.hover} rel="noopener noreferrer" href="https://soundcloud.com/radiomarchetti" target="_blank">
                  <p><FaSoundcloud className={styles.inlineicons} /> Soundcloud</p>
                </a>
                <a title="Twitter" className={styles.hover} rel="noopener noreferrer" href="https://twitter.com/marchettiradio" target="_blank">
                  <p><FaTwitter className={styles.inlineicons} /> Twitter</p>
                </a>
                <a title="GitHub" className={styles.hover} rel="noopener noreferrer" href="https://github.com/radiomarchetti" target="_blank">
                  <p><FaGithub className={styles.inlineicons} /> GitHub</p>
                </a>
              </div>
            </div>
          </section>
          {/* <section>
            {
              avisos.map((aviso, i) => {
                return (
                  <article key={aviso.titulo}>
                    <p>{aviso.titulo}</p>
                    <p>{aviso.imagem}</p>
                    <p>{aviso.autor}</p>
                    <p>{aviso.avatar}</p>
                    <p>{aviso.texto}</p>
                  </article>
                )
              })
            }
          </section> */}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const data = await getArticles()
  

  return {
    props: {
      avisos: data.avisos
    },
    // revalidate: 300
  }
}