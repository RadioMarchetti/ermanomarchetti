import React, {useState, useEffect} from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';
import { FaSadTear } from 'react-icons/fa'
import { Dialog, DialogActions, DialogContent, Button, DialogTitle } from '@material-ui/core'
// import Draggable from 'react-draggable'

import './global.css';

import { theme } from './assets/themes'

import Routes from './routes';

import api from './services/api'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 10000,
  offset: '0.375rem',
  transition: transitions.SCALE
}

// const randomNum = Math.floor(Math.random() * (10 - 1)) + 1;

theme()

function App() {
  const [NCNotification, setNCNotification] = useState(true)
  const [notificationBtn, setNotificationBtn] = useState("")
  // eslint-disable-next-line
  const [notificationType, setNotificationType] = useState("none") // none, email, youtube
  const [email, setEmail] = useState("")
  // const [notificationTitle, setNotificationTitle] = useState("")
  // const [notificationContent, setNotificationContent] = useState("")
  const notificationUpdate = "disabled"; // Format: "DDMMAAAA-NOTNAME" / "disabled"
  
  setTimeout(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }, 500)

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)

    var newcomer = localStorage.getItem('newcomer')
    // alert(`newcomer = ${newcomer}, ${typeof Boolean(newcomer)}`)
    if ( newcomer === notificationUpdate || notificationUpdate === "disabled") {
      setNCNotification(false)
    } else {
      setTimeout(() => {
        setNotificationBtn("close")
      }, 8000)
    }
  }, [])

  function closePopUp() {
    setNCNotification(false)
    localStorage.setItem('newcomer', notificationUpdate);
  }

  async function handleSubscribe(e) {
    e.preventDefault()
    const data = {
      email
    }

    try {
      // const response = 
      await api.post('email/subscribe', data)
      closePopUp()
    } catch (err) {
      alert(`Erro ao inscrever seu e-mail, por favor tente novamente mais tarde. O servidor retornou: ${err}`)
    }
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Dialog open={NCNotification} fullScreen={true}>
        <DialogTitle>
          <p className="align-center">
            {/* { 
              randomNum <= 5 
              ?  */}
              <span>Oie <span role="img" aria-hidden="true">👉👈</span></span>
              {/* :
              <span>Oie <span role="img" aria-hidden="true">👉👈</span></span> 
            } */}
          </p>
        </DialogTitle>
        { notificationType === "youtube" ? 
          <DialogContent>
            {/* {
              randomNum <= 5
              ? */}
              <div>
                <p className="marginbottom75rem text-justify">Desculpa te incomodar, vi você passando e te achei incrível, aí pensei em vir aqui e te pedir uma coisa.</p>
                <p className="marginbottom75rem text-justify">Você pode por favor se inscrever no canal da escola no YouTube?</p>
                <p className="marginbottom75rem text-justify">É de graça, rapidinho e é só clicar no botão vermelho abaixo.</p>
              </div>
              {/* :
              <div>
                <p className="marginbottom75rem text-justify">Desculpa te incomodar, vi você passando e te achei incrível, você pode por favor se inscrever no canal da escola no YouTube?</p>
                <p className="marginbottom75rem text-justify">É de graça e é só clicar no botão vermelho abaixo.</p>
              </div>
            } */}
            <div className="ytbutton">
              <div className="g-ytsubscribe" data-channel="RadioMarchetti" data-layout="default" data-count="default"></div>
              {/* 
                  Define a quantidade de informação presente no botão
                data-layout="default, full"

                  Define o tema, se ausente, será claro por padrão
                data-theme="dark"

                  Define se o contador será ou não mostrado
                data-count="default, hidden" 
              */}
              <p className="ytlink">youtube.com/RadioMarchetti</p>
            </div>
          </DialogContent>
        : notificationType === "email" ?
          <DialogContent>
            {/* <iframe className="email-subscription" src="https://cdn.forms-content.sg-form.com/fefcb664-c110-11ea-b15f-9e54f68f45e6"/> */}
            <form onSubmit={handleSubscribe} >
              <input 
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button type="submit" variant="outlined">
                Enviar
              </Button>
            </form>
          </DialogContent>
        : null }
        <DialogActions>
          { notificationBtn === "ignore" ? <Button variant="outlined" onClick={() => closePopUp()} >Ignorar <FaSadTear className="marginleft75rem" /></Button> : notificationBtn === "close" ? <Button variant="outlined" onClick={() => closePopUp()} >Fechar</Button> : null }
        </DialogActions>
      </Dialog>
      <Routes />
    </AlertProvider>
  )
}

export default App;
