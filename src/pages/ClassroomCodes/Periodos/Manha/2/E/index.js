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
        <p className="title">Códigos 2°ano E</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>qcxnudf</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>bup3wpa</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>ym2h6db</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>idipvdc</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>efwgdqi</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>d2qm4tx</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>c3jqtcd</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>64qpjnt</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>lhms7jy</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>7gpqouja</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>zg4wpv3</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>kwrmruk</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>k2mg7p7</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia e informática</strong>
            <p>EM BREVE</p>
          </li>
          <li className="item-flex">
            <strong>Turismo</strong>
            <p>EM BREVE</p>
          </li>
          <li className="item-flex">
            <strong>Mercado de Trabalho</strong>
            <p>3p6s4l5</p>
          </li>
          <li className="item-flex">
            <strong>Games</strong>
            <p>bxlizq3</p>
          </li>
          <li className="item-flex">
            <strong>Artes Visuais</strong>
            <p>mesuba6</p>
          </li>
          <li className="item-flex">
            <strong>Quatro Artes</strong>
            <p>3p6s4l5</p>
          </li>
          <Link to="/cdgs/manha/2">
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
