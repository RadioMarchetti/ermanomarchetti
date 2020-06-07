import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import Header from '../../assets/Header'

import './style.css';

function NotFound() {
  document.title = "Página não encontrada";

  const history = useHistory();
  const initDelay = 15000;
  const [ delay, setDelay ] = useState(initDelay);

  setTimeout(() => {
    setDelay(delay-1000)
  }, 1000);

  if (delay <= 0) {
    setDelay(initDelay)
    history.push("/home/");
  }

  return (
    <div className="notfound-container">
      <Header />
      <div className="content">
        <a className="text align-center hover" href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status#Respostas_de_erro_do_Cliente"><p className="error-code title align-center">404</p></a>
        <p className="text align-center">A página solicitada não foi encontrada</p>
        <p className="text align-center">Clique em um dos seguintes setores do site:</p>
        <div className="notfound-links">
          <Link to="/home"><p className="text align-center hover">Página inicial</p></Link>
          <Link to="/help/classroom/1"><p className="text align-center hover">Ajuda - Google Classroom</p></Link>
          <Link to="/contact"><p className="text align-center hover">Contato</p></Link>
          <p className="text align-center hover">Painel de administração</p>
        </div>
        <p className="text align-center">Você será redirecionado automaticamente à página inicial em {(delay / 1000)} segundos.</p>
      </div>
    </div>
  )
}

export default NotFound;