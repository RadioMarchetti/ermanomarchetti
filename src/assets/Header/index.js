import React from 'react';

import { Navbar } from '../Navbar'

function Header() {
  return (
    <div>
        <header>
          <Navbar>
            kdgdkgv
          </Navbar>
        </header>
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