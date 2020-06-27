import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../assets/Header';
import Footer from '../../../../assets/Footer';

function SelectClass() {
  document.title = "Códigos Manhã";

    return (
    <div className="manha-container vertical-align" >
      <Header />
      <div className="content">
        <h2 className="title">Selecione seu ano:</h2>
        <ul className="default">
          <Link to="/cdgs/manha/1">
            <li className="hover item-flex">
              <strong>1°ano</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/manha/2">
            <li className="hover item-flex">
              <strong>2°ano</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/manha/3">
            <li className="hover item-flex">
              <strong>3°ano</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs">
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

export default SelectClass;
