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
        
        <p className="hover important">
          Clique aqui se houver alguma dúvida ou algo em que possamos te ajudar
        </p>

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