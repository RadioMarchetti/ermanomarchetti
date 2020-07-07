import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiHome, FiHash, FiMessageCircle, FiHelpCircle, FiCalendar, FiArrowLeft, FiMoon, FiSun, FiCheck, FiAnchor, FiTag, FiChevronUp } from 'react-icons/fi'
import { FaTwitch, FaSpotify, FaSoundcloud, FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaDiscord, FaTelegram, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { theme, selectedTheme } from '../themes'
import { EmFull } from '../images/svg/Icons'
// import { CSSTransition } from 'react-transition-group';
import { SwipeableDrawer, Button, Collapse } from '@material-ui/core';

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const [socialMediaOpen, setSocialMediaOpen] = useState(false)
  const [socialMediaIcon, setSocialMediaIcon] = useState('youtube')
  const [ activeTheme, setActiveTheme ] = useState('')

  const history = useHistory();

  // THEMES

  useEffect(() => {setActiveTheme(selectedTheme())}, [])
  
  function changeTheme(thm) {
    setActiveTheme(thm)
    theme(thm)
  }

  // THEMES

  function goto(page) {
    history.push(page)
  }

  setTimeout(() => {
    if (socialMediaIcon === 'youtube') {
      setSocialMediaIcon('facebook')
      return
    } else if (socialMediaIcon === 'facebook') {
      setSocialMediaIcon('instagram')
      return
    } else if (socialMediaIcon === 'instagram') {
      setSocialMediaIcon('twitter')
      return
    } else if (socialMediaIcon === 'twitter') {
      setSocialMediaIcon('youtube') // Twitch, Spotify, Soundcloud, Discord, Telegram, Messenger and Whatsapp disabled by default, if you want to enable, change this state from 'youtube' to 'twitch'
      return
    } else if (socialMediaIcon === 'twitch') {
      setSocialMediaIcon('spotify')
      return
    } else if (socialMediaIcon === 'spotify') {
      setSocialMediaIcon('soundcloud')
      return
    } else if (socialMediaIcon === 'soundcloud') {
      setSocialMediaIcon('discord')
      return
    } else if (socialMediaIcon === 'discord') {
      setSocialMediaIcon('telegram')
      return
    } else if (socialMediaIcon === 'telegram') {
      setSocialMediaIcon('messenger')
      return
    } else if (socialMediaIcon === 'messenger') {
      setSocialMediaIcon('whatsapp')
      return
    } else if (socialMediaIcon === 'whatsapp') {
      setSocialMediaIcon('youtube')
      return
    }
  }, 1250)

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item" title="Página inicial">
          {/* <p className="title popup">Ermano&nbsp;Marchetti</p> */}
          <Link to="/home">
            <EmFull />
          </Link>
        </li>
        <li className="nav-item">
          <li className="nav-item" title="Menu de navegação">
            <div className="nav-button" onClick={() => setOpen(!open)}>
              { open === true ? <FiArrowLeft className="nav-icon nav-icon-open" /> : <FiArrowLeft className="nav-icon" /> }
            </div>
          </li>
          
          <SwipeableDrawer className="drawer" variant="temporary" open={open} anchor="right" onOpen={() => setOpen(true)} onClose={() => setOpen(false)} disableScrollLock={ true } >
            <div role="presentation">
              <Button onClick={() => setOpen(!open)} className="drawer-back drawer-btn">
                <span className="drawer-icon">{ open === true ? <FiArrowLeft className="animated open" /> : <FiArrowLeft className="animated" />}</span>
                <span className="drawer-icon">{ open === true ? <p>Fechar</p> : <p>Abrir</p> }</span>
              </Button>

              <Button className="drawer-btn" onClick={() => goto('/home')}>
                <p>Página inicial</p>
                <span className="drawer-icon"><FiHome /></span>
              </Button>
              <Button className="drawer-btn" onClick={() => goto('/cdgs')}>
                <p>Códigos</p>
                <span className="drawer-icon"><FiHash /></span>
              </Button>
              <Button className="drawer-btn" onClick={() => goto('/help/classroom/1')}>
                <p>Ajuda</p>
                <span className="drawer-icon"><FiHelpCircle /></span>
              </Button>
              <Button className="drawer-btn" onClick={() => goto('/cronograma')}>
                <p>Cronograma</p>
                <span className="drawer-icon"><FiCalendar /></span>
              </Button>
              <a href="/contact" className="drawer-item">
              <Button className="drawer-btn">
                  <p>Contato</p>
                  <span className="drawer-icon"><FiMessageCircle /></span>
              </Button>
              </a>



              <Button className="drawer-btn" onClick={() => setThemeOpen(!themeOpen)}>
                <p>Temas</p>
                <span className="drawer-icon">{ themeOpen ? <FiChevronUp /> : activeTheme === "red" ? <FiTag /> : activeTheme === "bright" ? <FiSun /> : activeTheme === "dark" ? <FiMoon /> : activeTheme === "default" ? <FiAnchor /> : null}</span>
              </Button>
              <Collapse in={themeOpen} className="dd">
                <Button className="dd-btn" onClick={() => changeTheme('default')}>
                  <p>Padrão</p>
                  { activeTheme === "default" ? <span className="selected dd-icon"><FiCheck /></span> : <span className="dd-icon"><FiAnchor /></span> }
                </Button>
                <Button className="dd-btn" onClick={() => changeTheme('bright')}>
                  <p>Claro</p>
                  { activeTheme === "bright" ? <span className="selected dd-icon"><FiCheck /></span> : <span className="dd-icon"><FiSun /></span> }
                </Button>
                <Button className="dd-btn" onClick={() => changeTheme('dark')}>
                  <p>Escuro</p>
                  { activeTheme === "dark" ? <span className="selected dd-icon"><FiCheck /></span> : <span className="dd-icon"><FiMoon /></span> }
                </Button>
              </Collapse>



              <Button className="drawer-btn" onClick={() => setSocialMediaOpen(!socialMediaOpen)}>
                <p>Redes Sociais</p>
                <span className="drawer-icon">
                  {
                    socialMediaOpen ? <FiChevronUp /> :
                    socialMediaIcon === "facebook" ? <FaFacebook /> :
                    socialMediaIcon === "instagram" ? <FaInstagram /> :
                    socialMediaIcon === "twitter" ? <FaTwitter /> :
                    socialMediaIcon === "youtube" ? <FaYoutube />  :
                    socialMediaIcon === "twitch" ? <FaTwitch /> :
                    socialMediaIcon === "spotify" ? <FaSpotify /> :
                    socialMediaIcon === "soundcloud" ? <FaSoundcloud /> :
                    socialMediaIcon === "discord" ? <FaDiscord /> :
                    socialMediaIcon === "telegram" ? <FaTelegram /> :
                    socialMediaIcon === "messenger" ? <FaFacebookMessenger /> :
                    socialMediaIcon === "whatsapp" ? <FaWhatsapp /> :
                    null
                  }
                </span>
              </Button>
              <Collapse in={socialMediaOpen} className="dd">

                <a title="Youtube" className="hover" rel="noopener noreferrer" href="https://www.youtube.com/user/RadioMarchetti" target="_blank">
                  <Button className="dd-btn">
                    <p>YouTube</p>
                    <FaYoutube />
                  </Button>
                </a>

                <a title="Twitch" className="hover hidden" aria-hidden="true" rel="noopener noreferrer" href="https://twitch.tv/radiomarchetti" target="_blank">
                  <Button className="dd-btn">
                    <p>Twitch</p>
                    <FaTwitch /> 
                  </Button>
                </a>

                <a title="Facebook" className="hover" rel="noopener noreferrer" href="https://www.facebook.com/radiomarchetti" target="_blank">
                  <Button className="dd-btn">
                    <p>Facebook</p>
                    <FaFacebook />
                  </Button>
                </a>

                <a title="Instagram" className="hover" rel="noopener noreferrer" href="https://www.instagram.com/radiomarchetti" target="_blank">
                  <Button className="dd-btn">
                    <p>Instagram</p>
                    <FaInstagram />
                  </Button>
                </a>

                <a title="Twitter" className="hover" rel="noopener noreferrer" href="https://twitter.com/marchettiradio" target="_blank">
                  <Button className="dd-btn">
                    <p>Twitter</p>
                    <FaTwitter />
                  </Button>
                </a>

                <a title="Spotify" className="hover hidden" aria-hidden="true" rel="noopener noreferrer" href="https://open.spotify.com/user/a7x8pfre1iifeb053ntzfc7d8" target="_blank">
                  <Button className="dd-btn">
                    <p>Spotify</p>
                    <FaSpotify />
                  </Button>
                </a>

                <a title="Soundcloud" className="hover hidden" aria-hidden="true" rel="noopener noreferrer" href="https://soundcloud.com/radiomarchetti" target="_blank">
                  <Button className="dd-btn">
                    <p>Soundcloud</p>
                    <FaSoundcloud />
                  </Button>
                </a>

                <a title="Discord" className="hover hidden" aria-hidden="true" rel="noopener noreferrer" href="https://discord.gg/5RHgw4s" target="_blank">
                  <Button className="dd-btn">
                    <p>Discord</p>
                    <FaDiscord />
                  </Button>
                </a>

                <a title="Telegram" className="hover hidden" aria-hidden="true" rel="noopener noreferrer" href="https://google.com" target="_blank">
                  <Button className="dd-btn">
                    <p>Telegram</p>
                    <FaTelegram />
                  </Button>
                </a>

                <a title="Messenger" className="hover hidden" aria-hidden="true" rel="noopener noreferrer" href="https://m.me/RadioMarchetti" target="_blank">
                  <Button className="dd-btn">
                    <p>Messenger</p>
                    <FaFacebookMessenger />
                  </Button>
                </a>

                <a title="WhatsApp" className="hover hidden" aria-hidden="true" rel="noopener noreferrer" href="https://google.com" target="_blank">
                  <Button className="dd-btn">
                    <p>WhatsApp</p>
                    <FaWhatsapp />
                  </Button>
                </a>

              </Collapse>
              <div className="drawer-footer"></div>
            </div>
          </SwipeableDrawer>
        </li>
      </ul>
    </nav>
  )
}


// function NavItem(props) {
//   const [ open, setOpen ] = useState(false);
//   return (
//     <li className="nav-item">
//       <div className="nav-button" onClick={() => setOpen(!open)}>
//         { open === true ? <FiChevronDown className="nav-icon nav-icon-open" /> : <FiChevronDown className="nav-icon" /> }
//       </div>
//       {open && props.children}
//     </li>
//   )
// }

// function DropdownMenu() {
//   const [ activeMenu, setActiveMenu ] = useState('main')
//   const [ menuHeight, setMenuHeight ] = useState(null)
//   const [ activeTheme, setActiveTheme ] = useState('')

//   // THEMES

//   useEffect(() => {setActiveTheme(selectedTheme())}, [])
  
//   function changeTheme(thm) {
//     setActiveTheme(thm)
//     theme(thm)
//   }

//   // THEMES

//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height)
//   }

//   return (
//     <div className="dropdown" style={{ height: menuHeight }}>
//       <CSSTransition 
//         in={activeMenu === 'main'} 
//         unmountOnExit 
//         timeout={500}
//         classNames="menu-primary"
//         onEnter={calcHeight}
//       >
//         <div className="menu">
//           <Link to="/home" className="menu-item">
//             <span className="nav-button"><FiHome /></span>
//             <p>Página inicial</p>
//           </Link>
//           <Link to="/cdgs" className="menu-item">
//             <span className="nav-button"><FiHash /></span>
//             <p>Códigos</p>
//           </Link>
//           <Link to="/help/classroom/1" className="menu-item">
//             <span className="nav-button"><FiHelpCircle /></span>
//             <p>Ajuda</p>
//           </Link>
//           <Link to="/cronograma" className="menu-item">
//             <span className="nav-button"><FiCalendar /></span>
//             <p>Cronograma</p>
//           </Link>
//           <a href="/contact" className="menu-item">
//             <span className="nav-button"><FiMessageCircle /></span>
//             <p>Contato</p>
//           </a>
//           <a href="#/" className="menu-item" onClick={() => setActiveMenu('themes')}>
//             <span className="nav-button">{ activeTheme === "red" ? <FiTag /> : activeTheme === "bright" ? <FiSun /> : activeTheme === "dark" ? <FiMoon /> : activeTheme === "default" ? <FiAnchor /> : null}</span>
//             <p>Temas</p>
//           </a>
//         </div>
//       </CSSTransition>
//       <CSSTransition 
//         in={activeMenu === 'themes'} 
//         unmountOnExit 
//         timeout={500}
//         classNames="menu-secondary"
//         onEnter={calcHeight}        
//       >
//         <div className="menu">
//           <a href="#/" className="menu-item" onClick={() => setActiveMenu('main')}>
//             <span className="nav-button"><FiArrowLeft /></span>
//             <p>Voltar</p>
//           </a>
//           <a href="#/" className="menu-item" onClick={() => changeTheme('default')}>
//             { activeTheme === "default" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiAnchor /></span> }
//             <p>Padrão</p>
//           </a>
//           <a href="#/" className="menu-item" onClick={() => changeTheme('bright')}>
//             { activeTheme === "bright" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiSun /></span> }
//             <p>Claro</p>
//           </a>
//           <a href="#/" className="menu-item" onClick={() => changeTheme('dark')}>
//             { activeTheme === "dark" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiMoon /></span> }
//             <p>Escuro</p>
//           </a>
//           <a href="#/" className="menu-item" 
//             // onClick={() => {changeTheme('red')}}
//           >
//             { activeTheme === "red" ? <span className="selected nav-button"><FiCheck /></span> : <span className="nav-button"><FiTag /></span> }
//             <p>Vermelho (em breve)</p>
//           </a>
//         </div>
//       </CSSTransition>
//     </div>
//   )
// }