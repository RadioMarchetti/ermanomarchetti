import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/home">
        <header>
          <p className="header-title title">Ermano Marchetti</p>
        </header>
      </Link>
      <div className="header-placeholder"></div>
      <div className="warnings important align-center">
        <a href="mailto:ermanomarchetti.radio@gmail.com?Subject=Dúvida%20site&body=Olá,%20boa%20tarde,%20meu%20nome%20é%20___%20e%20eu%20sou%20do%20_º%20ano%20_.%20Minha%20dúvida%20é:">
          <p className="hover important">
            Clique aqui se houver alguma dúvida ou algo em que possamos te ajudar
          </p>
        </a>
        <a href="https://forms.gle/Fo5dtaqZ9iKiPmaG9" >
          <p className="hover important margintop75rem">
            Clique aqui se encontrou algum erro
          </p>
        </a>
        
      </div>
    </div>
  )
}

export default Header;