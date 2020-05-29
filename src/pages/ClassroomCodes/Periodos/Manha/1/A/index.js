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
        <p className="title">Códigos 1°ano A</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>yylta2a</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>v63g735</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>cbars6x</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>opwa2sv</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>4vidddp</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>EM BREVE</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>e4vxlxt</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>elqsuxw</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>6oxmfze</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>cw2xabk</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>6al6f2b</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>u2dssvm</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>piwsafk</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>qukk2lz</p>
          </li>
          <li className="item-flex">
            <strong>Psicologia</strong>
            <p>wbhnufp</p>
          </li>
          <li className="item-flex">
            <strong>Estética</strong>
            <p>afuxulu</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia e informática</strong>
            <p>ve7u7d7</p>
          </li>
          <li className="item-flex">
            <strong>Intercâmbio</strong>
            <p>dyponzo</p>
          </li>
          <li className="item-flex">
            <strong>Marketing</strong>
            <p>qu32meu</p>
          </li>
          <li className="item-flex">
            <strong>Games</strong>
            <p>zw3rkrb</p>
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
