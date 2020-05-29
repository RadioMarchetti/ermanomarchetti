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
        <p className="title">Códigos 2°ano C</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>wya45m5</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>65zq6a5</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>pnx5g4d</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>habv5sx</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>a23oy67</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>n3tiiph</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>u7nz2cz</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>dxo2skl</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>c2genbd</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>lp6llp5</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>stylco4</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>aejxbyc</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>txn2ktp</p>
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
