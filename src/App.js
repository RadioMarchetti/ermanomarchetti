import React, {useState, useEffect} from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';
import { FaSadTear } from 'react-icons/fa'
import { Dialog, DialogActions, DialogContent, Button, DialogTitle } from '@material-ui/core'

// import './css/em-bootstrap.css';

import './global.css';

import { theme } from './assets/themes'

import Routes from './routes';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 10000,
  offset: '0.375rem',
  transition: transitions.SCALE
}

theme()

function App() {
  const [NCNotification, setNCNotification] = useState(true)
  const [notificationBtn, setNotificationBtn] = useState("")
  const notificationUpdate = "16032020-youtube";
  
  useEffect(() => {
    var newcomer = localStorage.getItem('newcomer')
    // alert(`newcomer = ${newcomer}, ${typeof Boolean(newcomer)}`)
    if ( newcomer === notificationUpdate) {
      setNCNotification(false)
    } else {
      setTimeout(() => {
        setNotificationBtn("close")
      }, 5000)
    }
  }, [])

  function closePopUp() {
    setNCNotification(false)
    localStorage.setItem('newcomer', notificationUpdate);
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Dialog open={NCNotification} >
        <DialogTitle>
          E. E. Ermano Marchetti
        </DialogTitle>
        <DialogContent>
          <p className="marginbottom75rem">Inscreva-se no nosso canal do YouTube, é só clicar no botão abaixo e é de graça.</p>
          <div className="ytbutton">
            <div className="g-ytsubscribe" data-channel="RadioMarchetti" data-layout="default" data-count="default"></div>
          </div>
        </DialogContent>
        <DialogActions>
          { notificationBtn === "ignore" ? <Button variant="outlined" onClick={() => closePopUp()} >Ignorar <FaSadTear className="marginleft75rem" /></Button> : notificationBtn === "close" ? <Button variant="outlined" onClick={() => closePopUp()} >Fechar</Button> : null }
        </DialogActions>
      </Dialog>
      <Routes />
    </AlertProvider>
  )
}

export default App;
