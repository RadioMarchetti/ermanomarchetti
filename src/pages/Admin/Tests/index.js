import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

import api from '../../../services/api'
import { DialogTitle, DialogContent, CircularProgress, Dialog } from '@material-ui/core';

function Home() {
  document.title = "Ermano Marchetti";
  document.querySelector('meta[name=description]').setAttribute('content', 'Site oficial da Escola Estadual Ermano Marchetti, desenvolvido pelos alunos para os alunos.')
  
  const history = useHistory();

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubscribe(e) {
    e.preventDefault()
    const data = {
      email
    }

    try {
      setLoading(true)
      // const response = 
      await api.post('email/subscribe', data)
      alert('E-mail inscito com sucesso.')
      history.push('/home')
    } catch (err) {
      setLoading(false)
      alert(`Erro ao inscrever seu e-mail, por favor tente novamente mais tarde. O servidor retornou: ${err}.`)
    }
  }

  return (
    
    <div className="vertical-align">
      
      <Header />
      <div className="content">
        <form onSubmit={handleSubscribe} >
          <input 
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Insira aqui seu e-mail"
          />
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
        <Dialog open={loading}>
          <DialogTitle>
            Carregando...
          </DialogTitle>
          <DialogContent>
            <div className="align-center">
              <CircularProgress />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
