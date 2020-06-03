import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../assets/Header';
import Footer from '../../../../assets/Footer';

function SelectClass() {
  document.title = "Códigos Noite";
  return (
    <div className="manha-container vertical-align" >
      <Header />
      <div className="content">
        <p className="title">Selecione seu ano:</p>
        <ul className="default">
          <Link to="/cdgs/noite/1">
            <li className="hover item-flex">
              <strong>1°ano G</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/noite/2">
            <li className="hover item-flex">
              <strong>2°ano</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/noite/3">
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
