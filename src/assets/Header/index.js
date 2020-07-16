import React, { useState, useEffect } from 'react';
import updateWarning from '../warnings'

import { Navbar } from '../Navbar'

function Header() {
  const [warnings, setWarnings] = useState("")

  useEffect(() => {
    setWarnings(updateWarning())
  }, [])

  return (
    <div>
        <header>
          <h1 className="hidden" aria-hidden="true">Escola Estadual Ermano Marchetti</h1>
          <h2 className="hidden" aria-hidden="true">Site oficial da escola Ermano Marchetti em Pirituba, São Paulo, SP. Desenvolvido e mantido pelos alunos.</h2>
          <Navbar />
        </header>
      <div className="header-placeholder"></div>
        {warnings.length >= 1 ? 
          <div className="warnings important align-center">
            {warnings}
          </div>
        : null}
    </div>
  )
}

export default Header;