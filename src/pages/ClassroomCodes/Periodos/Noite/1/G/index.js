import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 1°ano G</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>ftvoibs</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>idawmmw</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>qigbsac</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>mqnadpq</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>yvbdosu</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>rixf3f6</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>csnprfc</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>kz4tu4e</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>eaifks3</p>
          </li>
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
