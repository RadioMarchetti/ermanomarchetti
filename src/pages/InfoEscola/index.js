import React from 'react'
import { useHistory } from 'react-router-dom'

import { EMInfoEscola } from '../../assets/images/svg/Icons'

import Header from '../../assets/Header'
import Footer from '../../assets/Footer'

import './style.css';

function InfoEscola() {

  const history = useHistory();
  
  return (
    <div className="info-escola-container">
      <Header />
      <div className="content">
        <EMInfoEscola className="info-esscola-home" />
      </div>
    </div>
  )
}

export default InfoEscola;
