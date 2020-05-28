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
        <p className="title">Códigos 1°ano F</p>
        <ul className="default">
          <li className="item-flex">
            <strong>Geografia</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>História</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Filosofia</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Sociologia</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Português</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Educação Física</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Inglês</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Química</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Física</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Biologia</strong>
            <p>000000</p>
          </li>
          <li className="item-flex">
            <strong>Matemática</strong>
            <p>000000</p>
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
