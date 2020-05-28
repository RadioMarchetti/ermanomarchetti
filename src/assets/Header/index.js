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
        <p>
          Esse site está em desenvolvimento e pode apresentar instabilidade.
        </p>
      </div>
    </div>
  )
}

export default Header;