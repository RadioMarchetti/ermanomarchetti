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
        <p className="title">Códigos 3°ano D</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>i7fxpjf</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>mebu53c</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>dzqqkb6</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>vjxpywv</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>ouzscna</p>
          </li>
          <li className="item-flex">
            <strong>Arte</strong>
            <p>eohrw3s</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>esqia4n</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>4m7ymc7</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>kyrfzaf</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>eohrw35</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>qb76q4b</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>q7d7ugo</p>
          </li>
          <li className="item-flex">
            <strong>Tecnologia</strong>
            <p>hzum7mt</p>
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
