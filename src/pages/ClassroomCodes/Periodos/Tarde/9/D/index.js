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
        <p className="title">Códigos 9°ano D</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>assqo4u</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>7clejct</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>tjszh7z</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>kjaewob</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>prdzv7z</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>7merkwz</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>hipp36h</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>w7t4ve4</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>EM BREVE</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>mwvp2qf</p>
          </li>
          <li className="item-flex">
            <strong>Estética</strong>
            <p>jyi65vo</p>
          </li>
          <li className="item-flex">
            <strong>Alimentação Saudável</strong>
            <p>4icz2vm</p>
          </li>
          <li className="item-flex">
            <strong>Dança</strong>
            <p>uetbtm6</p>
          </li>
          <li className="item-flex">
            <strong>Artes Visuais</strong>
            <p>7vifi2i</p>
          </li>
          <li className="item-flex">
            <strong>Quatro Artes</strong>
            <p>m2kgp24</p>
          </li>
          <li className="item-flex">
            <strong>Educação Financeira</strong>
            <p>m36hg5r</p>
          </li>
          <li className="item-flex">
            <strong>Horta</strong>
            <p>xvikb5a</p>
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
