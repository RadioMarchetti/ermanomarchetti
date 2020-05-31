import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Noite - 3° ano F";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 3°ano F</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>s2dn3oa</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>hailhab</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>noao5x2</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>i7xvyzf</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>vdfvp4s</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>3sneinf</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>pdhukmz</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>tutwnp4</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>nifnll3</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>hawqsto</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>snmuijr</p>
          </li>
          <Link to="/cdgs/noite/3">
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
