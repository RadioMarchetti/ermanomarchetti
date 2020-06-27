import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '../../../../../assets/Header';
import Footer from '../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Tarde - 6° ano";
  return (
    <div className="class-selector-container vertical-align">
      <Header />
      <div className="content">
        <h2 className="title">Selecione sua série (classe):</h2>
        <ul className="default">

        <Link to="/cdgs/tarde/6a">
            <li className="hover item-flex">
              <strong>6°ano A</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/tarde/6b">
            <li className="hover item-flex">
              <strong>6°ano B</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/tarde">
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
