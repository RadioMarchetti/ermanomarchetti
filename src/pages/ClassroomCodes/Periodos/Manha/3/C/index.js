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
        <p className="title">Códigos 3°ano C</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>y4u45ss</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>idKttf5</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>qhdkays</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>ukyqedd</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>rvxcx3v</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>kryytwi</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>mj55vcl</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>jzdkhif</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>j6mc65q</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>kryytwi</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>2zxjmyv</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>enjuvsh</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>6jbew3o</p>
          </li>
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
