import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '../../../../../assets/Header';
import Footer from '../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Noite - 2° ano";
  return (
    <div className="class-selector-container vertical-align">
      <Header />
      <div className="content">
        <p className="title">Selecione sua série (classe):</p>
        <ul className="default">

        <Link to="/cdgs/noite/2g">
            <li className="hover item-flex">
              <strong>2°ano G</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/noite/2h">
            <li className="hover item-flex">
              <strong>2°ano H</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/noite">
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
