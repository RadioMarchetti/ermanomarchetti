import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Tarde - 6° ano A";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 6°ano A</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>ybzdmnl</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>3tavlwl</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>f7tkv7f</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>f4cvyzd</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>77ywk3v</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>sxhzoiz</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>zuu44df</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>2rkn2jm</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>7ht46qu</p>
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
