import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Tarde - 7° ano A";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 7°ano A</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>ct2qiky</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>b3jmxd</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>rrrxazn</p>
          </li>
          <li className="item-flex">
            <strong>Artes</strong>
            <p>w2vx3y4</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>sqonrvf</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>gu7lzzq</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>ut4yur4</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>hpkhq32</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>qtu7yza</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>75y343o</p>
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
          <Link to="/cdgs/tarde/7">
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
