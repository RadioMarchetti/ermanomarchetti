import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiHash, FiHelpCircle, FiCalendar } from 'react-icons/fi';

import Header from '../../../assets/Header';
import Footer from '../../../assets/Footer';

import api from '../../../services/api'
import { Backdrop } from '@material-ui/core';

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
      const response = await api.post('email/subscribe', data)
      alert('E-mail inscito com sucesso.')
      history.push('/home')
    } catch (err) {
      setLoading(false)
      alert(`Erro ao inscrever seu e-mail, por favor tente novamente mais tarde. O servidor retornou: ${err}.`)
    }
  }

  if (loading) {
    return <Backdrop />
  }
  return (
    
    <div className="home-container vertical-align">
      
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
