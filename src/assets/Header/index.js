import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Dialog, IconButton, SwipeableDrawer, TextField, OutlinedInput, InputLabel, Button, DialogContent, DialogTitle, Collapse } from '@material-ui/core';
import { FiEye, FiEyeOff } from 'react-icons/fi'

import updateWarning from '../warnings'

import { Navbar } from '../Navbar'

import QRCode from '../QRCode'
import { Alert } from '@material-ui/lab';

function Header() {
  const [warnings, setWarnings] = useState("")
  const [adminOpen, setAdminOpen] = useState(false)
  const [adminLogin, setAdminLogin] = useState(false)
  const [adminLoginError, setAdminLoginError] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  useEffect(() => {
    // setWarnings(updateWarning())
  }, [])

  const history = useHistory();

  if (adminOpen) {
    setAdminLogin(true)
    setAdminOpen(false)
  }

  function handleAdminLogin(e) {
    e.preventDefault()
    setAdminLoginError(true)
  }

  return (
    <div>
        <header>
          <h1 className="hidden" aria-hidden="true">Escola Estadual Ermano Marchetti</h1>
          <h2 className="hidden" aria-hidden="true">Site oficial da escola Ermano Marchetti em Pirituba, São Paulo, SP. Desenvolvido e mantido pelos alunos.</h2>
          <Navbar />
        </header>
        {/* <QRCode /> */}
      <div className="header-placeholder"></div>
      {warnings.length >= 1 ? 
        <div className="warnings important align-center">
          {warnings}
        </div>
      : null}
      {/* <SwipeableDrawer variant="temporary" open={adminOpen} anchor="top" onOpen={() => setAdminOpen(true)} onClose={() => setAdminOpen(false)} disableScrollLock={ true } >
        <div role="presentation" className="align-center">
          <Button>Painel de administração - Solte para entrar</Button>
        </div>
      </SwipeableDrawer> */}
      <Dialog open={adminLogin} onClose={() => setAdminLogin(false)}>
        <form className="admin-login" onSubmit={handleAdminLogin}>
          <TextField 
            className="admin-input" 
            label="Nome de usuário" 
            variant="outlined" 
            name="username"
            type="text" 
            autoComplete="true"
          />
          <TextField 
            label="Senha" 
            variant="outlined" 
            name="current-password"
            type={passwordVisibility ? "text" : "password" } 
            autoComplete="true"
            className="admin-input admin-password" 
          />
          <Button
            aria-label="Mudar a visibilidade da senha"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
            onMouseDown={(e) => {e.preventDefault()}}
            variant="outlined"
            className="admin-input admin-psw-visibility" 
          >
            {passwordVisibility ? <><FiEyeOff className="admin-psw-visibility-icon" />Ocultar senha</> : <><FiEye className="admin-psw-visibility-icon" />Mostrar senha</>}
          </Button>
          <Collapse in={adminLoginError}>
            <Alert variant="standard" severity="error" className="admin-submit">
              Usuário ou senha incorretos
            </Alert>
          </Collapse>
          <Button 
            className="admin-input admin-submit" 
            variant="outlined" 
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </Dialog>
    </div>
  )
}

export default Header;