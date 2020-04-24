import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import somethingImg from '../../assets/something.png';

function Home() {
  return (
    <div className="home-container">
      <header>
        <img src={ logoImg } alt="Logo - Ermano Marchetti" />
        <p>Ermano Marchetti</p>

      </header>
    </div>
  );
}

export default Home;
