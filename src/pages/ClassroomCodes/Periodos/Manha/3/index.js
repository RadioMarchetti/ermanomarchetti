import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '../../../../../assets/Header';
import Footer from '../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 3° ano";
  return (
    <div className="class-selector-container vertical-align">
      <Header />
      <div className="content">
        <h2 className="title">Selecione sua série (classe):</h2>
        <ul className="default">

        <Link to="/cdgs/manha/3a">
            <li className="hover item-flex">
              <strong>3°ano A</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/manha/3b">
            <li className="hover item-flex">
              <strong>3°ano B</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha/3c">
            <li className="hover item-flex">
              <strong>3°ano C</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha/3d">
            <li className="hover item-flex">
              <strong>3°ano D</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha">
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

export default Sala;
