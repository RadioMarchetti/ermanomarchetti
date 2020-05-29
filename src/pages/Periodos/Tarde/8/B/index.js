import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Header from '../../../../../assets/Header';
import Footer from '../../../../../assets/Footer';

function Sala() {
  return (
    <div className="primeiro-manha-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 8°ano B</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>aunxuk3</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>gz7tizt</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>assxj5e</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>ifwhm26</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>w66w2by</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>j5oyxby</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>o42gy2i</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>oh3vptt</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>tknr3tw</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>rj3eg34</p>
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
