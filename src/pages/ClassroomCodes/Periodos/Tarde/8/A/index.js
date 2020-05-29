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
        <p className="title">Códigos 8°ano A</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>dehm7bk</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>jwdzdjo</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>izhvfay</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>af5pcsq</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>meknqil</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>57cvsa3</p>
          </li>
          <li className="item-flex">
            <strong>Ciências</strong>
            <p>4g3de6w</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>fbv3acc</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>vicvref</p>
          </li>
          <li className="item-flex">
            <strong>Projeto de vida</strong>
            <p>p5pnp5x</p>
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
