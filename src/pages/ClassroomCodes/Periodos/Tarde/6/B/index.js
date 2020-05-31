import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Tarde - 6° ano B";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 6°ano B</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>cevasvu</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>jg6capp</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>k2jpgom</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>dl4fn7a</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>2x5anm4</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>6wwpgd</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>qz2ltoe</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>olwjosu</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>kwm6sqf</p>
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
          <Link to="/cdgs/tarde/6">
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
