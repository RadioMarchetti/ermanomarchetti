import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

import api from '../../../services/api'
import { CircularProgress, Dialog, DialogContent, DialogTitle } from '@material-ui/core';

function Home() {
  document.title = "Ermano Marchetti";
  document.querySelector('meta[name=description]').setAttribute('content', 'Site oficial da Escola Estadual Ermano Marchetti, desenvolvido pelos alunos para os alunos.')
  
  const history = useHistory();

  const [phrase, setPhrase] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubscribe(e) {
    e.preventDefault()
    const data = {
      phrase,
      adminPassword: password
    }

    try {
      setLoading(true)
      const response = await api.post('/phrase', data)
      if (response.data.success === true) {
        setLoading(false)
        alert('Operação realizada com sucesso.')
        setPhrase("")
      } else {
        setLoading(false)
        alert(`Erro: ${response.data.error}`)
      }
    } catch (err) {
      setLoading(false)
      alert(`Ops, não consegui me comunicar com o servidor.`)
    }
  }

  return (
    
    <div className="vertical-align">
      
      <Header />
      <div className="content">
        <form onSubmit={handleSubscribe} >
          <input 
            className="hidden"
            name="username"
            value="default"
            placeholder="Insira aqui seu username"
          />

          <input 
            className="input"
            type="password"
            name="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Insira aqui sua senha de administrador"
            autoComplete="current-password"
          />

          
          <input 
            className="input"
            type="text"
            name="warning"
            value={phrase}
            onChange={e => setPhrase(e.target.value)}
            placeholder="Insira aqui a frase"
            required
          />
          <section className="">
            <button className="button" type="submit">
              Enviar
            </button>
          </section>
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
