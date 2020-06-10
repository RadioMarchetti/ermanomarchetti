import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Header from '../../assets/Header';
import Footer from '../../assets/Footer';

function Schedule() {
  return (
    <div className="schedule-container vertical-align">
      <Header />
      <div className="content">
      <p className="title">Cronograma de entrega de atividades</p>
      <p className="title2 margintop75rem">Escolha seu período</p>
        <ul className="default">
          <Link to="/cronograma/tarde">
            <li className="hover item-flex">
              <strong>Fundamental II - Tarde</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cronograma/manha-noite">
            <li className="hover item-flex">
              <strong>Ensino Médio - Manhã / Noite</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/home">
            <li className="hover item-flex">
              <FiArrowLeft className="arrow"/>
              <strong>Voltar</strong>
            </li>
          </Link>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Schedule;