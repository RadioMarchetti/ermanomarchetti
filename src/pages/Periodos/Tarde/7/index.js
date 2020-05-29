import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '../../../../assets/Header';
import Footer from '../../../../assets/Footer';

function Sala() {
  return (
    <div className="primeiro-manha-container vertical-align">
      <Header />
      <div className="content">
        <p className="title">Selecione sua série (classe):</p>
        <ul className="default">

        <Link to="/cdgs/tarde/7a">
            <li className="hover item-flex">
              <strong>7°ano A</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/tarde/7b">
            <li className="hover item-flex">
              <strong>7°ano B</strong>
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

export default Sala;