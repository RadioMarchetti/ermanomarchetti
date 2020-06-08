import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar'

function Header() {
  return (
    <div>
      {/* <Link to="/home"> */}
        <header>
          {/* <p className="header-title title">Ermano Marchetti</p> */}
          <Navbar>
            kdgdkgv
          </Navbar>
        </header>
      {/* </Link> */}
      <div className="header-placeholder"></div>
      <div className="warnings important align-center">
        <a href="/contact">
          <p className="hover important">
            Clique aqui se tiver alguma dúvida
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