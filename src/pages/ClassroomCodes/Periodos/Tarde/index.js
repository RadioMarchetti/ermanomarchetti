import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../assets/Header';
import Footer from '../../../../assets/Footer';

function Manha() {
  return (
    <div className="manha-container vertical-align" >
      <Header />
      <div className="content">
        <p className="title">Selecione seu ano:</p>
        <ul className="default">
          <Link to="/cdgs/tarde/6">
            <li className="hover item-flex">
              <strong>6°ano</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link><Link to="/cdgs/tarde/7">
            <li className="hover item-flex">
              <strong>7°ano</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/tarde/8">
            <li className="hover item-flex">
              <strong>8°ano</strong>
              <FiArrowRight className="arrow"/>
            </li>
          </Link>
          <Link to="/cdgs/tarde/9">
            <li className="hover item-flex">
              <strong>9°ano</strong>
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

export default Manha;
