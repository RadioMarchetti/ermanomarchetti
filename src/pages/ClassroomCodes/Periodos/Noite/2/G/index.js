import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Noite - 2° ano G";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 2°ano G</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>bva2e4b</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>z3butls</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>wst4dmc</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>y3czwhi</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>cdunl4u</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>schkf5o</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>aovb6oh</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>7lyked2</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>ajmwadl</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>4ew5rt6</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>k5v3ry7</p>
          </li>
          <Link to="/cdgs/noite/2">
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
