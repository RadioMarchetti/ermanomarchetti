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
        <p className="title">Códigos 7°ano B</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>gr4z3gp</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>zqumt2m</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>z25vcjs</p>
          </li>
          <li className="item-flex">
            <strong>Artes</strong>
            <p>22yt3vj</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>jbkpc52</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>o3clzsw</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>5aqdlnj</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>w6jo53g</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>vo57x67</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>dowrdbp</p>
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
