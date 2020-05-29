import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '../../../../../assets/Header';
import Footer from '../../../../../assets/Footer';

function Sala() {
  return (
    <div className="class-selector-container vertical-align">
      <Header />
      <div className="content">
        <p className="title">Selecione sua série (classe):</p>
        <ul className="default">

        <Link to="/cdgs/manha/1a">
            <li className="hover item-flex">
              <strong>1°ano A</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/manha/1b">
            <li className="hover item-flex">
              <strong>1°ano B</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha/1c">
            <li className="hover item-flex">
              <strong>1°ano C</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha/1d">
            <li className="hover item-flex">
              <strong>1°ano D</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha/1e">
            <li className="hover item-flex">
              <strong>1°ano E</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha/1f">
            <li className="hover item-flex">
              <strong>1°ano F</strong>
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
