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
        <p className="title">Códigos 8°ano C</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>cnj7t65</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>yzngi4a</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>pxviixi</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>nao3xje</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>rdymiar</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>nvdzlti</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>z57og6t</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>ma5dten</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>ygusdqn</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>tyhv5eg</p>
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
          <Link to="/cdgs/tarde/8">
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
