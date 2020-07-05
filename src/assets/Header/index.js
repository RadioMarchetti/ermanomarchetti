import React from 'react';

import { Navbar } from '../Navbar'

function Header() {
  return (
    <div>
        <header>
          <h1 className="hidden" aria-hidden="true">Escola Estadual Ermano Marchetti</h1>
          <h2 className="hidden" aria-hidden="true">Site oficial da escola Ermano Marchetti em Pirituba, São Paulo, SP. Desenvolvido e mantido pelos alunos.</h2>
          <Navbar />
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