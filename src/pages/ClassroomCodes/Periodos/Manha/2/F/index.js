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
        <p className="title">Códigos 2°ano F</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>73qsa5s</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>t6nKpxt</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>devca4t</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>cdl52xo</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>onief6y</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>7yhvcn6</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>cbq4mq3</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>htcjpe6</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>5kgodrf</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>zK2aby3</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>EM BREVE</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>w2wz3j4</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>qiavllc</p>
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
