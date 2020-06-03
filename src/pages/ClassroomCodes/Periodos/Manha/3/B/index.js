import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../../../../../assets/Header';
import Footer from '../../../../../../assets/Footer';

function Sala() {
  document.title = "Códigos Manhã - 3° ano B";
  return (
    <div className="cdgs-container">
      <Header />
      <div className="content">
        <p className="title">Códigos 3°ano B</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>7tuebwu</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>uKjyc7r</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>ignkobo</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>4myc2zj</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>aK2jszl</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>mzi2zmt</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>sdhhcho</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>isc7tqr</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>rirzbrf</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>gbse5uq</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>hrebsml</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>rqjwsv6</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>jv2toff</p>
          </li>
          <Link to="/cdgs/manha/3">
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
