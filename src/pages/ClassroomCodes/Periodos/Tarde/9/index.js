import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '../../../../../assets/Header';
import Footer from '../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Tarde - 9° ano";
  return (
    <div className="class-selector-container vertical-align">
      <Header />
      <div className="content">
        <p className="title">Selecione sua série (classe):</p>
        <ul className="default">

        <Link to="/cdgs/tarde/9a">
            <li className="hover item-flex">
              <strong>9°ano A</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/tarde/9b">
            <li className="hover item-flex">
              <strong>9°ano B</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/tarde/9c">
            <li className="hover item-flex">
              <strong>9°ano C</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/tarde/9d">
            <li className="hover item-flex">
              <strong>9°ano D</strong>
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
