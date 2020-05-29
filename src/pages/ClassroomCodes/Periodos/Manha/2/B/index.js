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
        <p className="title">Códigos 2°ano B</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>3p33dqn</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>om7m4rf</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>ucqoday</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>u62po2q</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>ecq4p3m</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>gldyapt</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>kubnwiw</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>67rajaa</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>3ytm3jp</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>me3z722</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>rntc73x</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>pc2fzai</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>cxsthdh</p>
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
